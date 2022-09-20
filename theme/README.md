# Site Theme

This is the theme of the standard site template for Adobe Experience Manager (AEM).

This theme can be modified to customize the visual appearance of sites created from the standard site template and deployed using the [AEM Front-End Pipeline](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/developing-with-front-end-pipelines.html?lang=en) in Cloud Manager.

## Suported Node version(s)

By default Cloud Manager will use Node 14 to execute the Front-End Pipeline. Versions 12 and 16 are also available for the pipeline and can be selected by using the `CM_CUSTOM_VAR_NODE_VERSION` environment variable.

## Structure

* `src/main.ts`: This is the main entry point of your JS & CSS theme.
* `src/site`: Files that are generic to the entire site.
* `src/components`: Files that are specific to components.
* `src/resources`: Associated files, like icons, logos, fonts.

## Build

1. Initialize the project with following command executed at the theme root:

```
npm install
```

2. Complete the `.env` file with credentials for the local proxy server to access the site created on Cloud Service.

3. Run the local proxy server while working to preview your changes with the content from the production environment.

```
npm run live
```

4. Once your work is completed, check your changes into your [git repository](https://www.adobe.com/go/aem_qsc_retrieve_access_en) and [deploy your customized theme](https://www.adobe.com/go/aem_qsc_deploy_theme_en).
