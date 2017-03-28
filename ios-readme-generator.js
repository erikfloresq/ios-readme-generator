#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var format = require('format');

function generateReadme() {
  var fileDestination = program.file || "README.md"
  var stream = fs.createWriteStream(fileDestination);
  var appName = program.app_name || "Awesome Project";
  var appID = program.app_id || "aw.esome.project";
  var appVersion = program.app_version || "0.0.0";
  var build = program.build || "0";
  var language = program.language || "Swift";
  var deployment = program.deployment_target || "iOS 8";

  var appNameTemplate = '# %s\n\n';
  var specificationTemplate = '## Datos del proyecto\n';
  var appIDTemplate = '- __App ID:__ %s\n';
  var appVersionTemplate = '- __Version:__ %s\n';
  var buildTemplate = '- __Build:__ %s\n';
  var languageTemplate = '- __Language:__ %s\n';
  var deploymentTemplate = '- __Deployment Target:__ %s\n\n';
  var configurationTemplate = '## Configuración del proyecto\n';
  var dependenciesTemplate = 'Para instalar las __dependencias__ solo debemos hacer\n';
  var dependenciesCodeHeaderTemplate = '```\n';
  var dependenciesCodeBodyTemplate = 'pod install\n';
  var dependenciesCodeFooterTemplate = '```\n';
  var certificatesTemplate = 'Para instalar los __certificados__ solo debemos hacer\n';
  var certificatesCodeHeaderTemplate = '```\n';
  var certificatesCodeBodyTemplate = 'fastlane certificate\n';
  var certificatesCodeFooterTemplate = '```\n';


  stream.once('open', function(fd) {
    stream.write(format(appNameTemplate, appName));
    stream.write(specificationTemplate);
    stream.write(format(appIDTemplate, appID));
    stream.write(format(appVersionTemplate, appVersion));
    stream.write(format(buildTemplate, build));
    stream.write(format(languageTemplate, language));
    stream.write(format(deploymentTemplate, deployment));
    stream.write(configurationTemplate);
    stream.write(dependenciesTemplate);
    stream.write(dependenciesCodeHeaderTemplate);
    stream.write(dependenciesCodeBodyTemplate);
    stream.write(dependenciesCodeFooterTemplate);
    stream.write(certificatesTemplate);
    stream.write(certificatesCodeHeaderTemplate);
    stream.write(certificatesCodeBodyTemplate);
    stream.write(certificatesCodeFooterTemplate);
    stream.end();
    console.log("README generated ! :D");
  });

}

program
  .version('1.0.0')
  .usage('[options]')
  .option('-n, --app_name [app_name]','Set Name for README')
  .option('-i, --app_id [app_id]','Set App ID')
  .option('-a, --app_version [app_version]','Set Version')
  .option('-b, --build [build]','Set Build')
  .option('-l, --language [language]','Set Language')
  .option('-d, --deployment_target [deployment_target]','Set deployment target')
  .option('-f, --file [file_destination]','File Destination')
  .parse(process.argv);

  generateReadme()
