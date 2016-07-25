'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Theme Scheme
 */

var GradeSchema = new Schema({
  school_name: {
    type: String,
    default: '',
    trim: true
  },
  school_id: {
    type: String,
    default: '',
    trim: true
  },
  grade_id: {
    type: String,
    default: '',
    trim: true
  },
  grade_name: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Grade', GradeSchema);
