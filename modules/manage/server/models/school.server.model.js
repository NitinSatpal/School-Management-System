'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Subject Schema
 */

var SchoolSchema = new Schema({
  school_name: {
    type: String,
    default: '',
    trim: true
  },
  school_id: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('School', SchoolSchema);
