const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const clear = require('gulp-clean');
const browsersync = require('browser-sync').create();

function clean() {
    return src('./dist/*', {
        read: false
    })
        .pipe(clear())
}

function css() {
    return src('./src/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(cssnano())
        .pipe(rename('styles.min.css'))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'))
        .pipe(browsersync.stream())
}

function js() {
    return src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/js'))
        .pipe(browsersync.stream())
}
function html() {
    return src('./src/index.html')
        .pipe(dest('./dist/'))
        .pipe(browsersync.stream())
}
function readme() {
    return src('./src/*.md')
        .pipe(dest('./dist/'))
}

function img() {
    return src('./src/img/*.{png, jpg}')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
        .pipe(browsersync.stream())
}

function svg() {
    return src('./src/img/*.svg')
        .pipe(dest('./dist/img'))
        .pipe(browsersync.stream())
}

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000
    });
}

function watchFiles() {
    watch('./src/sass/**/*', css);
    watch('./src/js/*.js', js);
    watch('./src/*.html', html);
    watch('./src/img/*', img);
    watch('./src/*.md', readme);
}

exports.default = series(clean, parallel(css, js, img, html, readme, svg), parallel(watchFiles, browserSync))