'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Theme Scheme
 */

var SectionSchema = new Schema({
  grade_name: {
    type: String,
    default: '',
    trim: true
  },
  grade_id: {
    type: String,
    default: '',
    trim: true
  },
  section_id: {
    type: String,
    default: '',
    trim: true
  },
  section_name: {
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

mongoose.model('Section', SectionSchema);
