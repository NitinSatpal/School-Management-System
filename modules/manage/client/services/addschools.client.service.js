(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('AddSchoolService', AddSchoolService);

  AddSchoolService.$inject = ['$resource'];

  function AddSchoolService($resource) {
    return $resource('/addschools/:schoolId', {
      schoolId: '@_id'
    });
  }
}());
