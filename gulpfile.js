'use strict';

var gulp          = require( 'gulp' ),
    config        = require('./gulp.config')(),
    connect       = require( 'gulp-connect' ),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat');

var files = [
    'stylesheets/_atoms/*.scss',
    'stylesheets/*.scss',
    'docs/*.html',
    'docs/pages/*.md',
    'docs/pages/*.md',
    'docs/index.html',
    'docs/app/components/**/**/*.html',
    'docs/app/components/**/**/*.md',
    'docs/app/components/**/*.md',
];

gulp.task( 'files', function() {
    gulp.src( files ).pipe( connect.reload() );
});

gulp.task('sass', function () {
    gulp.src(config.sass + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass-to-doc', function () {
    gulp.src(config.sass + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('docs/app/css'));
});

gulp.task( 'watch', function() {
    gulp.watch( files, [ 'sass','files', 'sass-to-doc' ]);
});

gulp.task( 'connect', function() {
    connect.server({ root: 'docs',livereload: true, port: 4000 });
});

gulp.task( 'default', [ 'connect', 'watch','sass', 'sass-to-doc' ]);
