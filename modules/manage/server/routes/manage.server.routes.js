'use strict';

module.exports = function (app) {
  var grades = require('../controllers/manage.server.controller');
  var subject = require('../controllers/manage.server.controller');
  var school = require('../controllers/manage.server.controller');
  var section = require('../controllers/manage.server.controller');
  var file = require('../controllers/manage.server.controller');

  app.route('/addgrades/')
    .post(grades.gradeAdd);

  app.route('/fetchgrades/')
    .get(grades.fetchGrades);

  app.route('/addsubjects/')
    .post(subject.subjectAdd);

  app.route('/fetchsubjects/')
    .get(subject.fetchSubjects);

  app.route('/addschools/')
    .post(school.schoolAdd);

  app.route('/fetchschools/')
    .get(school.fetchSchools);

  app.route('/addsections/')
    .post(section.sectionAdd);

  app.route('/fetchsections/')
    .get(section.fetchSections);

  app.route('/fileUpload/')
    .post(file.uploadFile);

  app.route('/fetchData/')
    .post(file.fetchData);

  app.route('/fetchfiledatas')
    .get(file.fetchFilesData);

  app.route('/fetchspecificfiledatas')
    .get(file.fetchSpecificFilesData);

  app.route('/savespecificfiledatas')
    .put(file.saveSpecificFilesData);
};
