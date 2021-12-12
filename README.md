# AEM Site Template for Tailwind

For garage week at Adobe 2021 the goal was to figure out the viablity to use Tailwind to design a Website.

Core Components are build with BEM notation for the different elements of a component, while Tailwind CSS is a utility/content agnostic CSS framework.

The philosophy of Tailwind CSS is that you should never leave your HTML file while developing. For AEM templates created with Site Templates this is not possible, since the markup is locked in the core components and is immutable.

The idea is to go the 'opposite' way and stay in the CSS file(s) and never having to look into the Markup. We use the Tailwind CSS classes where possible to extend the BEM CSS for the components using Tailwinds `@apply` directive.
See https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply 

Note : this branch is based on the parcel-theme branch.

## How to add Tailwind CSS to the Site Template

- Tailwind CSS is available either as a plugin for the PostCSS tool,or as a CLI. The plugin version would be the preferred one but  there is a series of bugs between postcss/tailwind/parcel that prevent us from working with it efficently. So the `npm run live` command was adapted to use tailwinds `watch` instead of parcels watch command. The CLI of the newly relased tailwind css 3.0 solves most of these issues, but we still had to create a `postcss.config.js` with all the needed plugins in the right order to make sure that tailwind and postcss work together nicely. see:
   - https://giters.com/tailwindlabs/tailwindcss/issues/3931
   - https://github.com/parcel-bundler/parcel/issues/6251
   - https://github.com/parcel-bundler/parcel/pull/6299

- Created a default configuration `tailwind.config.js` in the root using the CLI command.
- Added the plugin `@tailwind/typography` in the tailwind css config. This adds `prose` utility classes, simplifies styling of RTE output.
- In the root CSS file `theme.css` added the 3 tailwind includes and arranged the CSS imports so they work correclty with Post CSS `@import` statement. see https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports.

## Structure of the Tailwind CSS Site Template
Same as the normal Standard Site Template:

* `files`: Folder with the UI kit XD file and possibly other files.
* `previews`: Folder with screenshots of the site template.
* `site`: Content package of the content that will be copied for each site created from this template (templates, pages, etc.).
* `theme`: Sources of the template theme to modify how the site looks (CSS, JS, etc.).

## Preparation
1. download/build latest cloud-ready quickstart
1. install and start it
1. install the latest enablement package for Quicksite creation

## Development Tools
1. Tested with Visual Studio Code.
1. Install tailwind css IntelliSense and PostCSS Lanaguage Support extensions for VSCode.
1. Tailwind css plugins/extensions are available for most populare IDE's. See https://tailwindcss.com/docs/editor-support.

## Build Tailwind CSS Site Template

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

## Remarks
- Tailwind css recommends to not use any Preprocessor. We are anyway bound by the BEM notation we use in core components. SASS is mostly used for :
   - for states (focus,disabled, hover, etc.) which are part of Tailwind CSS so-called variants e.g. `hover:bg-green` 
   - for SASS nesting which can also be achieved using a PostCSS plugin.
   - for creating mixins which can also be achieved using a Post CSS plugin.
See https://tailwindcss.com/docs/using-with-preprocessors#nesting
See https://tailwindcss.com/docs/using-with-preprocessors.
See https://tailwindcss.com/docs/using-with-preprocessors#using-sass-less-or-stylus
- While you can combine the responsive layouts/breakpoints of tailwind css (flex, grid) with AEMs responsive Grid it makes it a cumbersome to keep both in sync and you need access to AEM itself as FE Developer and you need to fight with AEM's quirky Layout Editor :). So by default the grid.css is not part of tailwind css site template. The root container has been set to simple, so should also all other containers to not generate additional responsive grid divs.
- Experience Fragments should not be used to created repeated content in templates (header,footer). Thats not what they are created for.

### Tips
- To use Tailwind CSS `grid` on a container ( set using style system), set container to `simple` in edit dialog (or make it default in template) or else you must add `.aem-Grid` in the css definition to target the right container to become a grid. 
- If you want to use AEM Grid for layouting make sure that the media breakpoints for tailwind css (configurable in tailwind css config file) and AEM Grid (configurable in grid.css) are in sync.

### Limitations
- **As a Site Template Developer**: its annoying to keep site content part in sync between instance and Site Template repo while developing e.g if add a new Style on the instance, add more sample content etc.I have to download the content package and unpack it under my projects `site/src/main/content` , fix all the paths, or fidle with cryptic .content.xml files to find the right thing to adapt and then push a new version. Thats why we need an IDE specific for AEM projects.

- **As a Site Template Frontend Developer**: I can't add new styles to style system, as it not part of downloaded theme zip, so im stuck with what ever the Site Template developer has given me. Thats a serious limitation for a FE Dev who wants to add new variants of components using the Style System. Would be nice to have a e.g. a config file that gets parsed when theme zip gets uploaded and updates the style system. Probably one of the reasons the ezaem site template went the other route.

### Bugs
- The new style sheet notation (`preload` keyword in `rel` attribute) breaks the browser sync. So remove `preload` in site\src\main\content\jcr_root\conf\tailwind-site-template\_sling_configs\com.adobe.cq.wcm.core.components.config.HtmlPageItemsConfig\.content.xml

-----
# Brainstorm Ideas for Future Garage Week
- Create a plugin for Visual Studio Code, that recognices a Site Template theme, offers short cut commands to connect/test/deploy/ etc. , has tailwind css intellisense, browsersync in a side window

# Features I wish I had during development
- Would be nice to have a way to auto-reload the live preview browser whenever we change something on the instance, e.g. layout , style, edit content.
- We need to document the setup/workflow for a Site Template Developer (how to deploy/test test theme changes, how to keep site content in sync).

### Answered Questions
- Was i blind before or why is there still the `Update Github Settings` shown in site rails ? asked vlad
- How can i configure which page browsersync should open by default, currently it always opens `/en/home` ? Bartosz: Its hardcoded in https://github.com/adobe/aem-site-theme-builder/commit/05d9a7bb0c3483f6c0431ef74b949b299d1176c7
- Where does this `etc.clientlibs/wcm/compnents/.. .css` stuff come from , shouldnt there only be a `/theme.css`? Vlad: default styling from page component
- Is the `Debug` flag in HTML Libary Manager Osgi Config not working anymore ? Gabriel: doesnt work for site template


Results:
- unusable
- FE cant define styles through themes
- You cant have multiple times the same component in an container but with different policies
- AEM clearly build for BE and not for FE.
- Next to responsive Grid and Simple there needs to be Grid and Flex.
- we need composition, the ability to grab a few components and say , voila thats a new one. Experience Fragment is this in some way
but thats again FE unfriendly.

- FE is basically just doing theming
- We are basically asking a ST developer to create more flexible Templates with less tools than a BE dev. Main Problem:
  No Proxies. Example:
  - I want to place hero, cards, statement, teaser components in the same container
  - Card, Statement,Hero and Teaser components are all variations of Teaser
  - BE: proxy them, adapt dialogs/descriptions to match component, css class names match component name, you can adapt the markup if needed, you can add all 4 of them in the same container, apply defined differnt styles (e.g. color schemes, layout variations) to each of them using the styles in the policy, you can even add seperate policy settings, a policy that can be shared/exchanged between templates. The author can select them indivually from the side bar, configure, style them. 
  - ST: Create 3 Style groups for Teaser, add sub styles for each component style, CSS to tweak output for the diffent component styles is way more complicated, The dialog/descriptions are all for Teaser,even with unused elements. they all share the same policy, you can not have inidividual policy settings. The author only sees Teaser in the sidebar, all dialog elements are teaser related.


the right solution:
- bring proxies back

oder possible solutions: 
  - core components should only contain unopinionated components
  - build bigger components using compositions (NO thats not XP!)


- the best you can get are what we originally envisoned, landing pages, short lived marketing websites, and even they will all pretty much look the same.

The above are the reasons why rubens template exits.
Was the orginal creator of Standard Site Template not able to use mixins ?
- bem notation not as intuitive as i hoped there are sometimes divs inbetween

Author Quirks:
- Its not possible to rename the core components in the page edtior side bar, so confusing to end user

IIIIIIIIIIIIIIMPORTRANT:
Make sure your style system classes are not using the same name as a tailwind uitility classes or they will get
purged as they are not used
