(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('AddSectionService', AddSectionService);

  AddSectionService.$inject = ['$resource'];

  function AddSectionService($resource) {
    return $resource('/addsections/:sectionId', {
      sectionId: '@_id'
    });
  }
}());
