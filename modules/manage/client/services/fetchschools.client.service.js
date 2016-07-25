(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchSchoolsService', FetchSchoolsService);

  FetchSchoolsService.$inject = ['$resource'];

  function FetchSchoolsService($resource) {
    return $resource('/fetchschools/', {
    });
  }
}());
