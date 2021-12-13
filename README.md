# AEM Site Template for Tailwind CSS

WORK IN PROGRESS

For Garage Week at Adobe 2021 the goal was to figure out the viablity to use Tailwind CSS to design a Website.

Core Components are build with BEM notation for the different elements of a component, while Tailwind CSS is a utility CSS framework.
The philosophy of Tailwind CSS is that you should never leave your HTML file while developing. For AEM templates created for QSC (Quick Site Creation) this is not possible, since the markup is locked in the core components and is immutable.

The idea is to go the *opposite* way and stay in the CSS file(s) and never having to look into the markup. We use the Tailwind CSS classes where possible to extend the BEM CSS for the components using Tailwinds `@apply` directive ([Link](https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply)).

Note : This branch is based on the `parcel-theme` branch of the standard site template.

## How Tailwind CSS was added to the Site Template

- Tailwind CSS is available either as a plugin for PostCSS (which is used by Parcel) or as a CLI. The plugin version can not be used due to a series of bugs between postcss/tailwind/parcel that prevent us from working with it efficently. It anyway turned out that the `watch` function of Tailwind CSS CLI is much faster and stable
then parcels `watch`. So we used the CLI version.
- So the `npm run live` command was adapted to use tailwinds `watch`. The CLI of the newly released Tailwind CSS 3.0 solved most of the issues, but we still had to create a `postcss.config.js` with all the needed plugins in the right order to make sure that Tailwind CSS and PostCSS (its part of the CLI) work together nicely. 
- Created a default configuration `tailwind.config.js` in the root using the CLI command.
- Added the plugin `@tailwind/typography` in the tailwind css config. This adds `prose` utility classes, simplifies styling of RTE output. There are more plugins available if needed. 
- Tailwind CSS recommends to not use any Preprocessor, instead use plugins for PostCSS to add missing functionality ([Link](https://tailwindcss.com/docs/using-with-preprocessors)). So added plugins to the `postcss.config.js` file for `@import`, `@mixin` and nesting.
- In the root CSS file `theme.css` added the 3 Tailwind CSS includes and arranged the CSS imports so they work correctly with Post CSS `@import` statement ([Link](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports.)).

## Structure of the Tailwind CSS Site Template
Same as the normal Standard Site Template:

* `files`: Folder with the UI kit XD file and possibly other files.
* `previews`: Folder with screenshots of the site template.
* `site`: Content package of the content that will be copied for each site created from this template (templates, pages, etc.).
* `theme`: Sources of the template theme to modify how the site looks (CSS, JS, etc.).

## Preparation
1. Download/build latest cloud-ready quickstart.
1. Install and start it.
1. Install the latest enablement package for Quicksite creation.

## Development Tools
1. Tested with Visual Studio Code.
1. Install Tailwind CSS IntelliSense and PostCSS Language Support extensions for VSCode.
1. Tailwind CSS plugins/extensions are available for most populare IDE's ([Link](https://tailwindcss.com/docs/editor-support)).

## Build Tailwind CSS Site Template
Again same as the normal Standard Site Template:
1. Install Maven (to be able to use the packaging script).
1. Initialize the project with following command executed at the template root:

   ```bash
   npm install
   ```

1. To build the site template, run following command executed at the template root:

   ```bash
   npm run build
   ```

1. The site template ZIP file is now located below the template root: `tailwind-site-template-{version}.zip`.
1. use `npm run deploy` to deploy to local cloud ready instance, assuming it uses port 4502.

## Whats in the Tailwind CSS Site Template
- There is only one, intentionally simple (onyl one root container), empty template in it. The idea is to create layout with containers that are CSS Grids,with a Style System to configure it (rows, columns, directions, gaps).
- The root container is also a grid with style system settings for responive design.

## How Tailwind CSS was integrated
The idea is:
- the corecomponents folder contains all BEM notations, markup with comments for each components but this only serves as a docu/reference.
- the actual CSS files are below /design.
- The build principle is to have matching css selectors for each selectable style define in the components.

## Remarks
- While you can combine the responsive layout features (flex/grid/breakpoints) of Tailwind CSS with AEMs responsive Grid it makes it a cumbersome to keep both in sync (also whats the point when you can easily achive responsive layouting easily with Tailwind CSS :). So by default the `grid.css` is not part of Tailwind CSS Site Template. The root container and all other containers shold be set to `simple` to not generate additional responsive grid divs, that would make CSS targeting more complicated.

## Tips
Make sure your style system classes are not using the same name as a Tailwind CSS uitility classes or they will get
purged as Tailwind CSS CLI thinks they are not used and will purge them from the final CSS file.

### Bugs
- The new style sheet notation (`preload` keyword in `rel` attribute) breaks the browser-sync function. So remove `preload` in `site\src\main\content\jcr_root\conf\tailwind-site-template\_sling_configs\com.adobe.cq.wcm.core`.components.config.HtmlPageItemsConfig\.content.xml
 - Can't use the plugin vorsion of Tailwind CSS due to a series of bugs, see:
   - https://giters.com/tailwindlabs/tailwindcss/issues/3931
   - https://github.com/parcel-bundler/parcel/issues/6251
   - https://github.com/parcel-bundler/parcel/pull/6299
