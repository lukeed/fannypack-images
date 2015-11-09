var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var imagemin    = require('gulp-imagemin')
var flatten     = require('gulp-flatten')

module.exports = function(config){
  if(!config.images) return

  var paths = {
    src: $.Pather.join(config.root.src, config.images.src, '/**'),
    dest: $.Pather.join(config.root.dest, config.images.dest)
  }

  gulp.task('images', function() {
    return gulp.src(paths.src)
      .pipe( $.Changed(paths.dest) ) // Ignore unchanged files
      // optionally flatten all directories
      .pipe( $.If(config.images.flatten, flatten()) )
      .pipe( imagemin() ) // Optimize
      .pipe( gulp.dest(paths.dest) )
      .pipe( $.BrowserSync.reload({stream:true}) )
  })
}
