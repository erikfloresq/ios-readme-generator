# Readme Generator

It's a package for create the README of my iOS projects :D

## Install

```
yarn global add ios-readme-generator
```

## Use

```
ios-readme-generator
```

## Options

```
-n, --app_name [app_name]                    Set Name for README
-i, --app_id [app_id]                        Set App ID
-a, --app_version [app_version]              Set Version
-b, --build [build]                          Set Build
-l, --language [language]                    Set Language
-d, --deployment_target [deployment_target]  Set deployment target
-f, --file [file_destination]                File Destination
```

## Use with options

```
ios-readme-generator -n "Orbis Mobile" -i "pe.com.orbis.OrbisMobile" -a "1.0.0" -b "1" -l "Swift" -d "iOS 9" -f "README.md"
```

## Generation example

# Orbis Mobile

## Datos del proyecto
- __App ID:__ pe.com.orbis.OrbisMobile
- __Version:__ 1.0.0
- __Build:__ 1
- __Language:__ Swift
- __Deployment Target:__ iOS 9

## Configuración del proyecto
Para instalar las __dependencias__ solo debemos hacer
```
pod install
```
Para instalar los __certificados__ solo debemos hacer
```
fastlane certificate
```
