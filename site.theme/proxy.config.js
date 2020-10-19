const dotenv = require('dotenv');
const url = require('url');
const env = dotenv.config().parsed;

function normalizeUrl(url) {
  const parsedUrl = url.parse(env.URL);
  const port = (parsedUrl.port === '80' || parsedUrl.port === '443') ? '' : ':' + parsedUrl.port
  return parsedUrl.protocol + '//' + parsedUrl.hostname + port;
}

module.exports = {
  url: normalizeUrl(url),
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
