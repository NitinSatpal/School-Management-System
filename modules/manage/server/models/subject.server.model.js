'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Subject Schema
 */

var SubjectSchema = new Schema({
  subject_id: {
    type: String,
    default: '',
    trim: true
  },
  subject_name: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Subject', SubjectSchema);
