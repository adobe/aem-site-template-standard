# WKND Sites Starter Kit

This is the Sites Starter Kit for the WKND Reference site: [https://www.wknd.site/](https://www.wknd.site/)

## What does the Starter Kit contain?

<img src="https://user-images.githubusercontent.com/143527/89645292-c1313b80-d8b9-11ea-9ec4-3af8e8b1c92b.png" />

#### Site Template

Content sources for the WKND Stater Kit. It contains:
- sample pages,
- templates,
- CA configurations,
- DAM assets,
- experience fragments.

#### Site Theme

Theme sources for the WKND Stater Kit. It contains styling (CSS) and behavior (JS) for the Core Components and the build system (webpack).

#### Files

Folder containing UI Kit related to the WKND Starter Kit.

#### Previews

Folder including images previewing WKND Starter Kit which are visible in the AEM Site Wizard.

## Starter kit

To package and deploy starter kit to AEM instance you need to:

### Prerequisite

Install Maven (to be able to use the packaging script).

### Build

To build the starter kit, run following command at the project root:

```
npm run build
```
This commands generates the starter kit zip file `starterkit.zip` below the project root.

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

4. Package everything into starterkit.zip:
```
npm run build:package
```

### Deploy

Deploy `startekit.zip` to a local AEM instance.

```
npm run deploy
```
