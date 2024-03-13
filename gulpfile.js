let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');

function comprimeimagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilacaosass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function comprimejavascript(){
    return gulp.src ('./source/scripts/*.js')
    .pipe(uglify()).pipe(gulp.dest('./build/scripts'))
}



exports.default = function(){
    gulp.watch('./source/images/*', {ignoreInitial : false}, gulp.series(comprimeimagens))
    gulp.watch('./source/styles/*', {ignoreInitial : false}, gulp.series(compilacaosass))
    gulp.watch('./source/scripts/*', {ignoreInitial : false}, gulp.series(comprimejavascript))
}