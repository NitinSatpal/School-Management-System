(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchGradesService', FetchGradesService);

  FetchGradesService.$inject = ['$resource'];

  function FetchGradesService($resource) {
    return $resource('/fetchgrades/', {
    });
  }
}());
