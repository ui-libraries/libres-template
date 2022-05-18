var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cached');
var dependents = require('gulp-dependents');
var size = require('gulp-size');
var todo = require('gulp-todo');


var sassPath = './sass/**/*.scss';
var cssPath = './css/';

var sassOptions = {
    includePaths: [
        'node_modules/breakpoint-sass/stylesheets/'
    ],
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    overrideBrowserslist: ['>1%', 'last 5 versions']
};

gulp.task('sass', function () {
    const s = size({
        showFiles: true
    });

    return gulp
        .src(sassPath)
        .pipe(cache('sassFilesCache'))
        .pipe(dependents())
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(s)
        .pipe(sourcemaps.write('./css_sourcemaps/'))
        .pipe(gulp.dest(cssPath));
});

gulp.task('todo', function() {
    gulp.src(sassPath)
        .pipe(todo({
            fileName: 'todo.json',
            reporter: 'json'
        }))
        .pipe(gulp.dest('./todo/'));
});

gulp.task('default', function() {
    gulp.watch(sassPath, gulp.series('sass'));
});
