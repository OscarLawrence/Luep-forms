const fs = require('fs');

const libphonenumber = require('libphonenumber-js');

const CountryFlags = require('../metaData/countryFlags.json');

const meta = {};

for (let c of CountryFlags) {
  if (!libphonenumber.isSupportedCountry(c.code)) continue;
  meta[c.code] = {
    dialCode: `+${libphonenumber.getCountryCallingCode(c.code)}`,
    flag: c.emoji,
    name: c.name,
  };
}

// const meta = CountryFlags.filter((x) => libphonenumber.isSupportedCountry(x.code)).map((c) => ({
//   dialCode: `+${libphonenumber.getCountryCallingCode(c.code)}`,
//   code: c.code,
//   flag: c.emoji,
//   name: c.name,
// }));

// const meta = libphonenumber
//   .getCountries()
//   .map((c) => ({ code: c, dialCode: libphonenumber.getCountryCallingCode(c) }));

console.log(meta.length);

fs.writeFileSync('phoneData.json', JSON.stringify(meta));
