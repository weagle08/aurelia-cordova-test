/**
 * Created by ben on 8/25/15.
 */
var appRoot = 'client/';
var outRoot = 'www/';

module.exports = {
    root: appRoot,
    scripts: appRoot + 'js/**/*.js',
    vvm: appRoot + 'js/**/*.js',
    html: appRoot + 'js/**/*.html',
    index: appRoot + 'index.html',
    css: appRoot + 'css/**/*.css',
    sass: appRoot + 'css/**/*.scss',
    jspm: appRoot + 'jspm_packages/**/*',
    config: appRoot + 'config.js',
    test: 'test/**/*.js',
    output: outRoot,
    doc: '/.doc',
    jspmOut: outRoot + 'jspm_packages',
    vvmOut: outRoot + 'js',
    styleOut: outRoot + 'css',
    scriptsOut: outRoot + 'js'
};