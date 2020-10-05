# Basic Sites Template

This is the basic site template for Adobe Experience Manager (AEM).

It that can serve as a most basic starting point for creating a new sites, or as a staring point for creating custom site templates.

## Structure

* `files`: Folder with the UI kit XD file and possibly other files.
* `previews`: Folder with screenshots of the site template.
* `site.template`: Content package of the content that will be copied for each site created from this template (templates, pages, etc.).
* `site.theme`: Sources of the template theme to modify how the site looks (CSS, JS, etc.).

## Build

1. Install Maven (to be able to use the packaging script).

2. Initialize the project with following command executed at the template root:

```
npm install
```

3. To build the site template, run following command executed at the template root:

```
npm run build
```

4. The site template ZIP file is now located below the template root: `site-template.zip`.

5. Deploy
  * Upload the `site-template.zip` file in AEM's site creation wizard to create a new site from that template.
  * Alternatively, run the deployment script:

```
npm run deploy
```

### Build step by step

If you want to build `site-template.zip` step by step, here are the full instructions.

1. Compile the site template theme:

```
npm run build:theme
```

2. Create a theme clientlib and put it into the site.template:

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
