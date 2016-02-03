/**
 * Created by weagl on 11/21/2015.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
    browserSync({
        online: false,
        open: false,
        port: 9090,
        server: {
            baseDir: ['./www'],
            middleware: function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});

gulp.task('serve-proxy', ['build'], function(done) {
    browserSync({
        online: false,
        open: false,
        port: 9000,
        proxy: 'localhost:20009'
    }, done);
});