'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Subject Schema
 */

var FileDataSchema = new Schema({
  subject_name: {
    type: String,
    default: '',
    trim: true
  },
  grade_name: {
    type: String,
    default: '',
    trim: true
  },
  school_specific_lesson_name: {
    type: String,
    default: '',
    trim: true
  },
  standard_lesson_name: {
    type: String,
    default: '',
    trim: true
  },
  section_name: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('FileData', FileDataSchema);
