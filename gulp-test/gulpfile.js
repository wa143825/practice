let gulp = require('gulp')
let browserSync = require('browser-sync')
let connect = require('gulp-connect')

let pug = require('gulp-pug')
let styl = require('gulp-stylus')
let imgmin = require('gulp-imagemin')

let clean = require('gulp-clean')
let csso = require('gulp-csso')
let concat = require('gulp-concat')
let jshint = require('gulp-jshint')
let uglify = require('gulp-uglify')

//编译css
gulp.task('styl', () => {
    gulp.src('dist/css/*.css')
        .pipe(clean())
    return gulp.src('src/styl/**/*.styl')
        .pipe(styl())
        .pipe(csso())
        .pipe(concat('public.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('js', () => {
    gulp.src('dist/js/*.js').pipe(clean());
    return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('public.js'))
    .pipe(gulp.dest('dist/js/'))
});

// 编译html
gulp.task('pug', function() {
    gulp.src('dist/*.html').pipe(clean());
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('dist/'))
})

// 压缩图片
gulp.task('img', () => {
    return gulp.src(['src/**/*.jpg','src/**/*.png'])
        .pipe(imgmin())
        .pipe(gulp.dest('dist/'))
})

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: 'src'
        }
    })
})


gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})


gulp.task('clean', () => {
    gulp.src('dist/*', {read: false})
    .pipe(clean())
})


gulp.task('connect', async () => {
    await Promise.resolve('some result')
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    })
})

gulp.task('reload', () => {
    return gulp.src('src/*.pug')
        .pipe(connect.reload())
})

//监听src变化
gulp.task('watch', async () => {
    await Promise.resolve('some result')
    return gulp.watch('src/**/*', gulp.series('styl', 'pug', 'reload'))
})

gulp.task('default', gulp.parallel('watch', 'connect'))