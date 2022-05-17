<template>
  <div class="flex flex-col items-center mt-8">
    <ValidationForm v-model="valid" @submit="submit" class="max-w-md">
      <h3>Form Valid: {{ valid }}</h3>
      <TextField
        label="Email"
        placeholder="email@example.com"
        label-img="/static/charm_at-sign.svg"
        :rules="{ 'Please use a valid email': 'email' }"
        v-model="formData.textField"
      />
      <MultiValidationTextField
        label="Password"
        placeholder="********"
        :rules="{
          '8 Characters': (val) => !!val && val.length >= 8,
          'A upper case letter': (val) => !!val && /[A-Z]/.test(val),
          'A lower case letter': (val) => !!val && /[a-z]/.test(val),
        }"
        v-model="formData.multiValidationTextField"
      />
      <TextField
        label="Disabled"
        placeholder="Disabled"
        :rules="{
          'At least 5 characters': (val) => !!val && val.length >= 5,
          'At least one number': (val) => !!val && /[1-9]/.test(val),
        }"
        v-model="formData.disabledTextField"
        :show-hint="showHint"
      />
      <SelectField
        v-model="formData.selectField"
        label="Language"
        placeholder="Please select a language"
        :options="[
          { value: 'en', text: 'English' },
          { value: 'de', text: 'Deutsch' },
          { value: 'nl', text: 'Nederlands' },
          { value: 'es', text: 'Español' },
          { value: 'fr', text: 'Français' },
        ]"
      />
      <PhoneField
        v-model="formData.phoneField"
        label="Phone"
        placeholder="Please enter you phone number"
        validate-on-setup
      />
      <CodeField
        v-model="formData.codeField"
        label="Code"
        @done="handleDone"
        required="The code is required"
      />
      <FileField
        v-model="files"
        :accept="[
          'image/png',
          'image/x-png',
          'image/jpeg',
          'image/jpg',
          'image/jpe',
          'image/jpeg',
          'image/pjpeg',
        ]"
        multiple
      >
        <img v-for="src in srcs" :key="src" :src="src" alt="" />
      </FileField>
      <TextArea
        v-model="formData.textArea"
        label="TextArea"
        label-img="/static/charm_at-sign.svg"
        placeholder="Type here"
        max-height="100px"
        :rules="{ 'This field is required': 'required', ...extraError }"
      />
      <Switch
        v-model="formData.switch"
        :label="`Switch is ${formData.switch}`"
        hint="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quam facere iusto amet cum dolorum sint nostrum qui officia, dolores illo officiis voluptatem natus placeat porro velit tempore in explicabo sunt, eum repellat consectetur. Est natus reiciendis earum molestias sunt id corrupti accusantium vitae! Maiores aliquid est dolorem vel harum!
"
      />
      <button :style="{ 'pointer-events': valid ? 'auto' : 'none' }" type="submit">Submit</button>
    </ValidationForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import ValidationForm from '@/components/ValidationForm.vue';
import TextField from '@/components/TextField.vue';
import MultiValidationTextField from '@/components/MultiValidationTextField.vue';
import FileField from '@/components/FileField.vue';
import SelectField from '@/components/SelectField.vue';
import PhoneField from '@/components/PhoneField.vue';
import CodeField from '@/components/CodeField.vue';
import TextArea from '@/components/TextArea.vue';
import Switch from '@/components/Switch.vue';

const formData = reactive({
  textField: null,
  multiValidationTextField: null,
  disabledTextField: null,
  selectField: null,
  phoneField: null,
  codeField: null,
  textArea: null,
  switch: false,
});

const showHint = ref(false);

const files = ref(null as null | File[]);

const srcs = computed(() => (files.value ? files.value.map((f) => URL.createObjectURL(f)) : null));

watch(files, (f) => console.log(f, srcs.value));

const valid = ref(false);

const handleDone = () => {
  console.info('CodeField done', formData.codeField);
};

const submit = async () => {
  console.info(formData);
};

const extraError = reactive({ 'This is an extra error': false });
</script>

<style></style>
