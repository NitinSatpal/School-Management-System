(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchSubjectsService', FetchSubjectsService);

  FetchSubjectsService.$inject = ['$resource'];

  function FetchSubjectsService($resource) {
    return $resource('/fetchsubjects/', {
    });
  }
}());
