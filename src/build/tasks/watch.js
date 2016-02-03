/**
 * Created by weagl on 11/21/2015.
 */
var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
    gulp.watch(paths.vvm, ['build-vvm', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.scripts, ['build-scripts', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.css, ['build-css', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sass, ['build-sass'], browserSync.reload).on('change', reportChange);
    gulp.watch(paths.jspm, ['move-jspm'], browserSync.reload).on('change', reportChange);
    gulp.watch([paths.config, paths.root + 'index.js', paths.root + 'platformOverrides.js', paths.index], ['move-base-files'], browserSync.reload).on('change', reportChange);
    //gulp.watch(['data/**/*.js'], ['mocha-server-test']).on('change', reportChange);
});

gulp.task('watch-proxy', ['serve-proxy', 'mocha-server-test'], function() {
    gulp.watch(paths.vvm, ['build-vvm', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.scripts, ['build-scripts', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.css, ['build-css', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sass, ['build-sass'], browserSync.reload).on('change', reportChange);
    gulp.watch(paths.jspm, ['move-jspm'], browserSync.reload).on('change', reportChange);
    gulp.watch([paths.config, paths.root + 'index.js', paths.root + 'platformOverrides.js', paths.index], ['move-base-files'], browserSync.reload).on('change', reportChange);
    gulp.watch(['data/**/*.js'], ['mocha-server-test']).on('change', reportChange);
});