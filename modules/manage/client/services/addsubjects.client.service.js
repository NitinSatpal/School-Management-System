(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('AddSubjectsService', AddSubjectsService);

  AddSubjectsService.$inject = ['$resource'];

  function AddSubjectsService($resource) {
    return $resource('/addsubjects/:subjectId', {
      subjectId: '@_id'
    });
  }
}());
