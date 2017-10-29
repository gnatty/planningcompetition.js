
// --- REQUIRED PACKAGE
import browserSync     from 'browser-sync';
import gulp            from 'gulp';
import uglify          from 'gulp-uglify';
import watch           from 'gulp-watch';
import browserify      from 'browserify';
import babelify        from 'babelify';
import eslint          from 'gulp-eslint';
import tap             from 'gulp-tap';
import buffer          from 'gulp-buffer';
import gutil           from 'gulp-util';
import plumber         from 'gulp-plumber';

// --- CONFIG PATH
const configPath = {
  'app'     : {
    'dist'      : './app',
    'js'        : './app/**/*.js',
    'main'      : './app/app.js',
  },
  'public'  : {
    'root'      : './public',
    'dist'      : './public/dist',
    'js'        : './public/dist/js'
  }
};

// --- BROWSER SYNC SERVER
gulp.task('browserSync', () => {
  // --- BROWSER SYNC => INIT
  browserSync.init({
    server: configPath.public.root,
    open: false,
    port: 8089
  });
  // --- WATCH ON FILE CHANGE
  gulp.watch(configPath.app.js, ['dist:js:check']);
  gulp.watch(configPath.app.js, ['dist:js:app']);
});

// --- ESLINT CHECK JS
gulp.task('dist:js:check', () => {
  gulp.src(configPath.app.js)
    .pipe(plumber(function (error) {
      gutil.log(error.message);
      this.emit('end')
    }))
    .pipe(eslint())
    .pipe(eslint.format())
  ;
});

// --- SIGNLE OUTPUT APP.JS FILE FROM APP.JS
gulp.task('dist:js:app', () => {
  gulp.src(configPath.app.main)
    .pipe(plumber(function (error) {
      gutil.log(error.message);
      this.emit('end')
    }))
    .pipe(tap((file) => {
      file.contents = 
         browserify(file.path)
        .transform('babelify')
        .bundle()
        .on('error', function(error){
          gutil.log(error.stack);
          this.emit('end')
        })
      ;
    }))
    .pipe(buffer())
    .pipe(gulp.dest(configPath.public.js))
    .pipe(browserSync.stream())
  ;
});

// --- DEFAULT LOAD TASK
gulp.task('default', ['browserSync', 'dist:js:check', 'dist:js:app']);


