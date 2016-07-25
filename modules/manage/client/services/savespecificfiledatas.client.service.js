(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('SaveSpecificFileDatasService', SaveSpecificFileDatasService);

  SaveSpecificFileDatasService.$inject = ['$resource'];
  function SaveSpecificFileDatasService($resource) {
    return $resource('/savespecificfiledatas/', {
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
