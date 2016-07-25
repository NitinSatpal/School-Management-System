'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  xltojs = require("xlsx-to-json"),
  xlsx = require("mongo-xlsx"),
  mongojs = require('mongojs'),
  Grade = mongoose.model('Grade'),
  Subject = mongoose.model('Subject'),
  School = mongoose.model('School'),
  Section = mongoose.model('Section'),
  FileData = mongoose.model('FileData'),
  multer = require('multer'),
  express = require("express"),
  config = require(path.resolve('./config/config')),
  _ = require('lodash'),
  app = express(),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

var db = mongojs('mean-dev', ['filedatas']);
var storage = multer.diskStorage({ // multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './modules/manage/client/uploads/');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});

var upload = multer({ // multer settings
  storage: storage,
  fileFilter: function(req, file, callback) { // file filter
    if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === - 1) {
      return callback(new Error('Wrong extension type'));
    }
    callback(null, true);
  }
}).single('file');
// var upload = multer({ dest: 'modules/manage/client/upload/' });
var fs = require('fs');

/** Permissible loading a single file,
    the value of the attribute "name" in the form of "recfile". **/
// var type = upload.single('file');

exports.gradeAdd = function (req, res) {
  var grade = new Grade(req.body);

  grade.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(grade);
    }
  });
};

exports.fetchGrades = function (req, res) {
  Grade.find().sort('-created').populate('').exec(function (err, grades) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(grades);
    }
  });
};


exports.subjectAdd = function (req, res) {
  var subject = new Subject(req.body);

  subject.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subject);
    }
  });
};


exports.fetchSubjects = function (req, res) {
  Subject.find().sort('-created').populate('').exec(function (err, subjects) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(subjects);
    }
  });
};

exports.schoolAdd = function (req, res) {
  var school = new School(req.body);

  school.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(school);
    }
  });
};


exports.fetchSchools = function (req, res) {
  School.find().sort('-created').populate('').exec(function (err, schools) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(schools);
    }
  });
};

exports.sectionAdd = function (req, res) {
  var section = new Section(req.body);

  section.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(section);
    }
  });
};


exports.fetchSections = function (req, res) {
  Section.find().sort('-created').populate('').exec(function (err, sections) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(sections);
    }
  });
};


exports.uploadFile = function (req, res) {
  upload(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }
    res.json('');
  });
};

exports.fetchData = function (req, res) {
  var fs = require('fs');
  var array = {};
  var dir_name = "./modules/manage/client/uploads";
  fs.readdir(dir_name, function(err, files) {
    if (err) return;
    files.forEach(function(currentfile) {
      var thisFile = dir_name + '/' + currentfile;
      xltojs({
        input: thisFile,
        output: null
      }, function(err, result) {
        if (err) {
          console.error(err);
        } else {
          array = result;
        }
        db.filedatas.insert(array);
        var source = fs.createReadStream(thisFile);
        var dest = fs.createWriteStream('./modules/manage/client/uploads-done/' + currentfile);
        source.pipe(dest);
        source.on('end', function() { fs.unlinkSync(thisFile); });
        source.on('error', function(err) {});
      });
    });
  });
};

exports.fetchFilesData = function (req, res) {
  var grade = req.query.grade;
  var subject = req.query.subject;
  FileData.find({ grade_name: grade, subject_name: subject }).sort('-created').populate('name').exec(function (err, filedatas) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(filedatas);
    }
  });
};

exports.fetchSpecificFilesData = function (req, res) {
  // var idToFind = new mongoose.mongo.ObjectId(req.query.dataFileId);
  FileData.find({ _id: mongojs.ObjectId(req.query.id) }).sort('-created').populate('name').exec(function (err, filedatas) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(filedatas);
    }
  });
};

exports.saveSpecificFilesData = function (req, res) {
  var schoolName = req.body.school_specific_lesson_name;
  console.log(schoolName);
  
  console.log(req.query.id);
  db.filedatas.findAndModify({ query: { _id: mongojs.ObjectId(req.query.id) },
    update: { $set: { school_specific_lesson_name: schoolName } },
    new: true }, function(err, filedatas) {
    res.json(filedatas);
    console.log(res.toJson);
  });
};
