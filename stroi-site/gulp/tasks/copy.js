module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'img/**',
      '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};