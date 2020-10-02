const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
  url: `http://${env.HOST}:${env.PORT}`,
  css: {
    "dist": "./dist/css/theme.css",
    "url": `/conf/${env.SITE}/settings/wcm/clientlibs/theme.min.css`
  },
  js: {
    "dist": "./dist/js/theme.js",
    "url": `/conf/${env.SITE}/settings/wcm/clientlibs/theme.min.js`
  },
  port: 7000
};
