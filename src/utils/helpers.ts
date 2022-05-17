export const isNumber = (evt: KeyboardEvent) => {
  const e = evt || window.event;
  const charCode = e.which || e.keyCode || e.key;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    e.preventDefault();
    return false;
  }
  return true;
};

export const hello = 'hello';

type ObjectType<T> = T;

export const cloneDeep = (obj: ObjectType<object>): object => JSON.parse(JSON.stringify(obj));
