(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('FetchSectionsService', FetchSectionsService);

  FetchSectionsService.$inject = ['$resource'];

  function FetchSectionsService($resource) {
    return $resource('/fetchsections/', {
    });
  }
}());
