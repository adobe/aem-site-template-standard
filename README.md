# Basic Site Template

This is the basic site template for Adobe Experience Manager as a Cloud Service (AEMaaCS).

<img src="previews/site.png?raw=true" alt="Basic site preview" width="50%">

It can serve as a most basic starting point for creating a new site, or as a staring point for creating custom site templates.

## Structure

* `files`: Folder with the UI kit XD file and possibly other files.
* `previews`: Folder with screenshots of the site template.
* `site`: Content package of the content that will be copied for each site created from this template (templates, pages, etc.).
* `theme`: Sources of the template theme to modify how the site looks (CSS, JS, etc.).

## Install on AEMaaCS

* Go to <https://github.com/adobe/aem-site-template-basic/releases/latest> and download `site-template.zip`
* Upload `site-template.zip` in AEMaaCS's site creation wizard to create a new site from that template.

## Build locally

Alternatively you can build `site-template.zip` locally.

1. Install Maven (to be able to use the packaging script).
1. Initialize the project with following command executed at the template root:

   ```bash
   npm install
   ```

1. To build the site template, run following command executed at the template root:

   ```bash
   npm run build
   ```

1. The site template ZIP file is now located below the template root: `site-template.zip`.
1. Install on AEMaaCS or on a local cloudready instance by running `npm run deploy`.

## Develop Site Template

See: <https://github.com/adobe/aem-site-template-builder>

## Contributing

Contributions are welcomed! Read the [Contributing Guide](.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for more information.
