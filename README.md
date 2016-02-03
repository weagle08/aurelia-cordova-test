# aurelia-cordova-test

prerequsites:
* cordova v6.0
* jspm v0.16.19 (newer versions of jspm are broken because of changes in systemjs)
* android sdk with build tools v23 (these must be on path, see setting up for android sdk)
* android phone with developer mode on and USB debugging enabled
* android phone connected to PC via USB

**steps to run on android**

1. clone this repository
2. npm install -g cordova gulp jspm@0.16.19
3. cd [repo-location]/src
4. npm install
5. jspm install
6. gulp watch (when complete you can view in browsers.. should just be a hello world) 
7. cordova platform add android
8. cordova run android
9. once app has been installed and launced on phone open chrome browser to *chrome://inspect*
10. click inspect on the app and verify issue that aurelia-bootstrapper is not loaded
