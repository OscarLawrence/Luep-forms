export default () => {
  if (typeof window !== 'undefined' && 'crypto' in window) {
    return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
  }
  return Date.now().toString();
};
