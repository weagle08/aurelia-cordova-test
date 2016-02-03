/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var paths = require('../paths');
var compileOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');

gulp.task('build-vvm', function(){
	return gulp.src([paths.vvm, '!' + paths.root + 'js/index.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(changed(paths.vvmOut, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(assign({}, compileOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.vvmOut));
});

gulp.task('build-scripts', function(){
	return gulp.src([paths.scripts, '!' + paths.root + 'js/index.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(changed(paths.scriptsOut, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(assign({}, compileOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.scriptsOut));
});

gulp.task('build-html', function(){
	return gulp.src([paths.html])
		.pipe(changed(paths.vvmOut, {extension: '.html'}))
		.pipe(gulp.dest(paths.vvmOut));
});

gulp.task('build-sass', function(){
	return gulp.src([paths.sass])
			.pipe(changed(paths.styleOut, {extension: '.css'}))
			.pipe(sass())
			.pipe(gulp.dest(paths.styleOut))
});

gulp.task('build-css', function(){
	return gulp.src([paths.css])
			.pipe(changed(paths.styleOut, {extension: '.css'}))
			.pipe(gulp.dest(paths.styleOut));
});

gulp.task('move-base-files', function(){
	return gulp.src([paths.config, paths.root + 'index.js', paths.root + 'platformOverrides.js', paths.index])
		.pipe(changed(paths.output))
		.pipe(gulp.dest(paths.output));
});

gulp.task('move-indexjs', function(){
	return gulp.src([paths.root + 'js/index.js'])
		.pipe(changed(paths.scriptsOut))
		.pipe(gulp.dest(paths.scriptsOut));
});

gulp.task('move-jspm', function(){
	return gulp.src(paths.jspm)
			.pipe(changed(paths.jspmOut))
			.pipe(gulp.dest(paths.jspmOut));
});

gulp.task('build', function(callback){
	return runSequence(
		'clean',
		['build-vvm', 'build-scripts', 'build-html', 'build-sass', 'build-css', 'move-jspm', 'move-base-files', 'move-indexjs'],
		callback
	);
});