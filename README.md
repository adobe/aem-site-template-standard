# Basic Sites Template

This is the basic AEM site template.

## What does the Starter Kit contain?

#### Site Template

Content sources for the site templates:
- sample pages,
- templates,
- CA configurations,
- DAM assets,
- experience fragments.

### Prerequisite

Install Maven (to be able to use the packaging script).

Then initialize the project with following command at the project root:

```
npm install
```

### Build

To build the starter kit, run following command at the project root:

```
npm run build
```

This commands generates the starter kit zip file `site-template.zip` below the project root.

#### Build step by step

If you want to build `startetkit.zip` step by step here are the full instructions. This is what the full build does behind the scenes.
All the commands need to be run at the project root.

1. Compile the Starter Kit theme:
```
npm run build:theme
```

2. Create a theme clientlib and put it into template:
```
npm run build:clientlib
```

3. Create a content package from site.template:
```
npm run build:template
```

4. Package everything into site-template.zip:
```
npm run build:package
```

### Deploy

Deploy `startekit.zip` to a local AEM instance.

```
npm run deploy
```
