// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var clear = require('gulp-rimraf');



gulp.task('styles', function () {
  var input = './app/styles/main.scss';
  var output = './app/styles/css';

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  return gulp
  // Find all `.scss` files from the `stylesheets/` folder
      .src(input)
      // Run Sass on those files
      .pipe(sass())
      .pipe(sass(sassOptions).on('error', sass.logError))
//    .pipe(sourcemaps.write('./app/styles/source_maps'))
      .pipe(autoprefixer())
      // Write the resulting CSS in the output folder
      .pipe(gulp.dest(output));
});

gulp.task('lint', function() {
  return gulp.src('./apps/pages/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
  return gulp.src('./apps/pages/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', function() {
  return gulp.src('./app/pages/app.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./app/js'));
});

/*gulp.task('browserify-test', ['lint-test'], function() {
  return gulp.src('./car-finder/test/client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('client-test.js'))
    .pipe(gulp.dest('build'));
});
*/

gulp.task('deploy-js', function() {
  return gulp.src('./app/pages/app.js')
      .pipe(browserify({
        insertGlobals: true
      }))
      //.pipe(uglify())
      .pipe(rename('bundle.min.js'))
      .pipe(gulp.dest('./dist/js'));
});


gulp.task('deploy-css', function () {
  var input = './app/styles/main.scss';
  var output = './dist/styles/css';

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
  };
  return gulp
  // Find all `.scss` files from the `stylesheets/` folder
      .src(input)
      // Run Sass on those files
      .pipe(sass())
      .pipe(sass(sassOptions).on('error', sass.logError))
      //    .pipe(sourcemaps.write('./app/styles/source_maps'))
      .pipe(autoprefixer())
      // Write the resulting CSS in the output folder
      .pipe(gulp.dest(output));
});


gulp.task('deploy-images', function(){
  gulp.src('./app/images/**/*.{jpg,png}')
      .pipe(gulp.dest('./dist/images'));
});




gulp.task('deploy-others', function(){
  gulp.src('./app/pages/heartcode-canvasloader-min-0.9.1.js')
      .pipe(gulp.dest('dist/pages'));
  gulp.src('./app/pages/thirdParties/css3-mediaqueries.js')
      .pipe(gulp.dest('./dist/pages/thirdParties'));
  gulp.src('./app/404.html')
      .pipe(gulp.dest('./dist'));
  gulp.src('./app/pages/mainPages/contact/verify.php')
      .pipe(gulp.dest('./dist/pages/mainPages/contact/'));
});

gulp.task('deploy-html', function(){
  gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist'));
  gulp.src('./app/index.html')
      .pipe(gulp.dest('./dist'));
  gulp.src('./app/404.html')
      .pipe(gulp.dest('./dist'));
});


// Clear the dist directory first with "gulp clean-dist"
gulp.task('clean-dist', function() {
  return gulp.src("dist/*", {read: false}).pipe(clear());
});

// After you have cleaned the dist directory, you now run gulp deploy to load the new contents
gulp.task('deploy', ['deploy-js', 'deploy-css', 'deploy-images', 'deploy-html', 'deploy-others']);


gulp.task('uglify', ['browserify-client'], function() {
  return gulp.src('./app/bundle.js')
    //.pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('build', ['uglify', 'minify']);


gulp.task('watch', function() {
  gulp.watch('./app/pages/**/*.js', ['uglify']);
  gulp.watch('./app/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'uglify', 'watch']);
