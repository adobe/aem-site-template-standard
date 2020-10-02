module.exports = {
     context: __dirname,
     clientLibRoot: "./site.template/src/main/content/jcr_root/conf/aem-sites-template-basic/settings/wcm/clientlibs",
     libs: [
         {
             name: "theme",
             allowProxy: true,
             categories: ["aem-sites-template-basic.theme"],
             serializationFormat: "xml",
             cssProcessor : ["default:none", "min:none"],
             jsProcessor: ["default:none", "min:none"],
             assets: {
                 js: [
                     "site.theme/dist/js/theme.js"
                 ],
                 css: [
                     "site.theme/dist/css/theme.css"
                 ],
                 resources: {
                     cwd: "site.theme/dist/resources",
                     flatten: false,
                     files: ["**/*.*"]
                 }
             }
         }
     ]
 }
