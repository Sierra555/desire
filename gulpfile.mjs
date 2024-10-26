import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
import autoprefixer from 'gulp-autoprefixer';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

const scss = gulpSass(sass);
const browserSyncInstance = browserSync.create();

function serve() {
  browserSyncInstance.init({
    server: {
      baseDir: 'app/'
    }
  });
}

 async function clean() {
  return await deleteAsync(['./dist/**', '!./dist/images/**']);
}

function images() {
  return gulp.src('app/images/**/*')
  .pipe(imagemin([
    gifsicle({interlaced: true}),
    mozjpeg({quality: 75, progressive: true}),
    optipng({optimizationLevel: 5}),
    svgo({
      plugins: [
        {
          name: 'removeViewBox',
          active: true
        },
        {
          name: 'cleanupIDs',
          active: false
        }
      ]
    })
  ]))
    .pipe(gulp.dest('dist/images'))
}

function styles() {
  return gulp.src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'compressed',}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSyncInstance.stream())
}

function scripts() {
  return gulp.src(['app/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify.default())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSyncInstance.stream());
}


function building() {
  return gulp.src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/*.html'
  ], {base: 'app'})
    .pipe(gulp.dest('dist'))
}

function watching() {
  gulp.watch('app/scss/**/*.scss', styles);
  gulp.watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  gulp.watch('app/images/**/*', images);
  gulp.watch('app/*.html').on('change', browserSyncInstance.reload);
}


export const build = gulp.series(clean, gulp.parallel(styles, scripts, images), building);

export default gulp.parallel(styles, scripts, serve, watching);
