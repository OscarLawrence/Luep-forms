module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //* BLUES
        primary: '#15296b',
        lightBlue: '#a3cddc',
        darkBlue: '#0a1549',
        highBlue: '#28d2e7',
        //* YELLOWS
        secondary: '#faa934',
        softYellow: '#f1e9e2',
        orange: '#f88547',
        // * OTHER
        green: '#36b482',
        purple: '#9444fb',
        error: '#c78861',
      },
      animation: {
        'bounce-in': 'bounce 3s linear 1',
      },
    },
  },
  plugins: [],
};
