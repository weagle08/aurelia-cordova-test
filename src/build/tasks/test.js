/**
 * Created by weagl on 11/21/2015.
 */
var gulp = require('gulp');
var paths = require('../paths');
var mocha = require('gulp-mocha');

gulp.task('mocha-server-test', function(){
    return gulp.src(paths.test)
        .pipe(mocha({reporter: 'spec'}));
});