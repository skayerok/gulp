'use strict';

const $ = require('gulp-load-plugins')();
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
  return function() {
    return combine(
        gulp.src(options.src),
        $.less(),
        $.autoprefixer(),
        $.csso(),
        gulp.dest('public/styles')
    ).on('error', $.notify.onError());
  };
};
