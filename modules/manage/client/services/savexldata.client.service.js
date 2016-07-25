(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('SaveDataService', SaveDataService);

  SaveDataService.$inject = ['$resource'];

  function SaveDataService($resource) {
    return $resource('/fetchData/', {
    });
  }
}());
