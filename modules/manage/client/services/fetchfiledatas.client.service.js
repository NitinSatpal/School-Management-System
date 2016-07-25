(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchFileDatasService', FetchFileDatasService);

  FetchFileDatasService.$inject = ['$resource'];

  function FetchFileDatasService($resource) {
    return $resource('/fetchfiledatas', {
    });
  }
}());
