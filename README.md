# About

"luep-forms" is a simple but powerfull library for vue3. It consists of components and composables to help you create self-validating forms with ease. It was initially created for the Luep social platform, but as it is highly flexible it can be used in any vue3 project.

## About Luep

Luep is a complete social platform and work-sharing space combined in a single, collaborative hub. And it’s packed with powerful, easy-to-use tools to help your group stay organized, in touch and on task. At your fingertips, you’ll have access to a broad portfolio of features and capabilities that enhance connectivity across your organization.

# How to use

## Installation

```
npm install git+ssh://git@bitbucket.org:squirrelsocial/luep-forms.git
```

or

```
yarn add git+ssh://git@bitbucket.org:squirrelsocial/luep-forms.git
```

## Usage

### Using Components

luep-forms currently provides the following components<br/>
ValidationForm <= A simple form which validates its children<br/>
TextField <= A simple TextField which can be validated<br/>
MultiValidationTextField <= A TextField which shows the state of its rules<br/>

#### Example Usage

```
<template>
    <ValidationForm v-model="valid" @submit.prevent="submit">
      <TextField
        label="Test"
        placeholder="Placeholder"
        :rules="{ 'This is invalid': (val) => !!val && val.length >= 5 }"
        v-model="formData.field1"
      />
      <MultiValidationTextField
        label="Test"
        placeholder="Placeholder"
        :rules="{
          '8 Characters': (val) => !!val && val.length >= 8,
          'A upper case letter': (val) => !!val && /[A-Z]/.test(val),
          'A lower case letter': (val) => !!val && /[a-z]/.test(val),
        }"
        v-model="formData.field2"
      />
      <TextField
        label="Test"
        placeholder="Placeholder"
        :rules="{ 'This is invalid': (val) => !!val && val.length >= 5 }"
        v-model="formData.field3"
      />
      <button :style="{ 'pointer-events': valid ? 'auto' : 'none' }" type="submit">Submit</button>
    </ValidationForm>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import {ValidationForm, TextField, MultiValidationTextField} from 'luep-forms'

const formData = reactive({
  field1: undefined,
  field2: undefined,
  field3: undefined,
});

const valid = ref(false);

const submit = async () => {
    console.info(formData)
    # Your logic here ...
}

</script>

```

### Using Composables

luep-forms currently provides the following composables<br/>
useFormValidation <= The composables to use for the form. It provides setupFormField and validateFormField functions to its children.<br/>
useFieldValidation <= The composable to use within form-fields. It injects the functions provided from the form parent, and return {errors: Ref, errorState: Ref, id: string}

#### Example Usage

##### useFormValidation

```
<template>
  <form>
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

import { useFormValidation } from 'luep-forms';

const { valid } = useFormValidation();

defineProps({
  modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

watch(valid, (val) => emit('update:modelValue', val));
</script>
```

##### useFieldValidation

```
<template>
  <div>
    <input
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
    <p v-for="(error, i) in errors" :key="i">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { useFieldValidation } from 'luep-forms';

const props = defineProps({
  type: { type: String, default: 'text' },
  rules: { type: Object, default: null },
  validateOnSetup: { type: Boolean, default: false },
  modelValue: { type: String, default: null },
});

const { modelValue } = toRefs(props);

const { errors, id } = useFieldValidation(props.rules, modelValue, {
  validateOnSetup: props.validateOnSetup,
});

//* Update Model Value
const updateValue = async (e: Event) => {
  const el = e.target as HTMLInputElement;
  emit('update:modelValue', el.value);
};
</script>
```

# Development setup

This guide is for running a local version of luep-forms on a local machine for the first time.

## Run locally

### Prerequisites

- node v14.17.6 or later
- nmp v7.24.2 or later

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Project Setup

Clone the repository in a convenient location and switch to the development branch

Install dependencies:

```
npm install
```

You can then run one of the commands below:

Run development server:

```
npm run dev
```

Run unit tests:

```
npm run test
```

Run lint checks:

```
npm run lint
```

Run lint fixes:

```
npm run lintfix
```

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
