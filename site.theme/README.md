## Site Theme

This is theme part of the WKND Starter Kit.

### Prerequisite

Before using Site Theme go into the `site.theme` folder and install npm modules:

```
npm install
```

### Build

Build all JS / SCSS sources into compiled files:

```
npm run dev
```
This command generates the theme js and css files and the resources folder below the `dist` folder:
```
css/theme.css
js/theme.js
resources/
```

### Live preview

Run live preview proxy server for AEM instance to see changes from your code immediately in the browser.

```
npm run live
```
This command runs a proxy server at port 7000.

### Deploy

Deploy the changes to the AEM instance:
```
npm run dev
npm run deploy
```
