(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchSpecificFileDatasService', FetchSpecificFileDatasService);

  FetchSpecificFileDatasService.$inject = ['$resource'];
  function FetchSpecificFileDatasService($resource) {
    return $resource('/fetchspecificfiledatas/', {
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
