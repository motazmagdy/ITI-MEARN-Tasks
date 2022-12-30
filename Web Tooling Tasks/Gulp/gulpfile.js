const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp")
var inject = require('gulp-inject');

var rep = require('gulp-replace-image-src');

var globs={
  html:"project/*.html",
  css:"project/css/**/*.css",
  img:'project/pics/*',
  js:'project/js/**/*.js'
}

const imagemin = require('gulp-imagemin');
function imgMinify() {
    return gulp.src(globs.img)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}


exports.img = imgMinify


const htmlmin = require('gulp-htmlmin');
function minifyHTML() {
  return src(globs.html)
  
  .pipe(inject(src('./dist/assets/css/style.min.css')))
  .pipe(inject(src('./dist/assets/js/all.min.js')))
  .pipe(rep({
    prependSrc : '/dist/images',
    keepOrigin : false
  }))

        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest('dist'))
}

exports.html = minifyHTML

const concat = require('gulp-concat');
const terser = require('gulp-terser');

function jsMinify() {
    return src(globs.js,{sourcemaps:true}) 
    
        .pipe(concat('all.min.js'))
        .pipe(terser())
        .pipe(dest('dist/assets/js',{sourcemaps:'.'}))
}
exports.js = jsMinify


var cleanCss = require('gulp-clean-css');
function cssMinify() {
    return src(globs.css)

        .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(dest('dist/assets/css'))

}
exports.css = cssMinify

var browserSync = require('browser-sync');
function serve (cb){
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  cb()
}

function reloadTask(done) {
  browserSync.reload()
  done()
}

function watchTask() {
    watch(globs.html,series(minifyHTML, reloadTask))
    watch(globs.js,series(jsMinify, reloadTask))
    watch(globs.css, series(cssMinify,reloadTask));
    watch(globs.img, series(imgMinify,reloadTask));
}
exports.default = series( parallel(imgMinify, jsMinify, cssMinify, minifyHTML), serve , watchTask)





