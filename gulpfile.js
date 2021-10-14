const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('css', css);
gulp.task('watch', watch);
gulp.task('browser', browser);
gulp.task('default', gulp.parallel('watch', 'browser', 'css'));

function browser(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

function css () {
  return gulp.src('css/*.css')
  .pipe(cleancss({compatibility: 'ie8'}))
  .pipe(gulp.dest('css/compilad'))
  .pipe(browserSync.stream());
}

function watch(){
  gulp.watch('css/*.css', css);
  gulp.watch('*html').on('change', browserSync.reload)
}