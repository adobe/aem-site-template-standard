const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
  url: `${env.URL}`,
  host: `${env.URL}`.replace("https://", "").replace("http://", ""),
  css: {
    "dist": "./dist/css/theme.css",
    "url": `/conf/${env.SITE}/settings/wcm/clientlibs/theme.*.css`
  },
  js: {
    "dist": "./dist/js/theme.js",
    "url": `/conf/${env.SITE}/settings/wcm/clientlibs/theme.*.js`
  },
  port: 7000
};
