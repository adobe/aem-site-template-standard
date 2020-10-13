const http = require('http');
const connect = require('connect');
const httpProxy = require('http-proxy');
const chokidar = require('chokidar');
const fileSystem = require('fs');

const CONFIG = require('./proxy.config.js');

// Watch Theme changes and update

const watcherCSS = chokidar.watch(CONFIG.css.dist, /^\./, { persistent: true });
const watcherJS = chokidar.watch(CONFIG.js.dist, /^\./, { persistent: true });

const fileChanged = function(target, path) {
  setTimeout(() => {
    fileSystem.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
      } else {
        CHANGES[target] = data;
      }
    });
  });
};

const CHANGES = {
  css: '',
  js: ''
};

const changedCSS = fileChanged.bind(null, 'css');
const changedJS = fileChanged.bind(null, 'js');

watcherCSS
  .on('add', path => changedCSS(path))
  .on('change', path => changedCSS(path));

watcherJS
  .on('add', path => changedJS(path))
  .on('change', path => changedJS(path));


// Append Theme to head of html in proxy response

var app = connect();

// Create proxy server

var proxy = httpProxy.createProxyServer({
  target: CONFIG.url,
  secure: false,
  autoRewrite: true,
  protocolRewrite: "http",
  preserveHeaderKeyCase: true,
  headers: {
    "Host": CONFIG.url.replace(/(^\w+:|^)\/\//, ''),
    "Referer" : CONFIG.url,
    "Origin": CONFIG.url
  }
});

// Remove the `secure` attribute from cookies to support Chrome

proxy.on('proxyRes', function(proxyRes, req, res) {
  if (proxyRes.headers['set-cookie']) {
    proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map(val => val.replace('Secure;', ''))
  }
});

const routeMap = new Map([
  [CONFIG.css.url, CONFIG.css.dist],
  [CONFIG.js.url, CONFIG.js.dist]
]);

app.use(
  function (req, res) {
    for (let [key, value] of routeMap) {
      if (req.url.match(key)) {
        fileSystem.createReadStream(value).pipe(res);
      }
    }
    proxy.web(req, res);
  }
);

http.createServer(app).listen(CONFIG.port);

console.log(`Go to http://localhost:${CONFIG.port} to see your live preview.`);
