(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('AddGradesService', AddGradesService);

  AddGradesService.$inject = ['$resource'];

  function AddGradesService($resource) {
    return $resource('/addgrades/:gradeId', {
      gradeId: '@_id'
    });
  }
}());
