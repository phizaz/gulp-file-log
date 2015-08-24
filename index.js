/* globals require, this, module, console */
var through2 = require('through2');
var path = require('path');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function (opt) {
  'use strict';
  // no options (right now)
  opt = opt || {};

  function bufferContents(file, enc, cb) {
    // stream is not supported
    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-concat',  'Streaming not supported'));
      cb();
      return;
    }
    // log its contents
    console.log('==file path:', file.path);
    console.log(file.contents.toString());
    // pass through the files
    this.push(file);
    cb();
  }

  return through2.obj(bufferContents);
};
