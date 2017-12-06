// Declare global scope variables.
const gulp = require('gulp')      // load the gulp library
const sass = require('gulp-sass') // load the gulp-sass compiler library
const sassPath = 'scss/**/*.scss';
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
// Define a new task called 'sass' that we can call to compile Sass to CSS
gulp.task('sass', function () {
  const plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnano()
  ]
  return gulp
    .src(sassPath)  // where to find the Sass source files
    .pipe(sass())           // forward those files to the compiler
    .pipe(gulp.dest('css')) // where to output the comipled CSS files
})

gulp.task('default', function () {
  gulp.watch(sassPath, ['sass'])
})
