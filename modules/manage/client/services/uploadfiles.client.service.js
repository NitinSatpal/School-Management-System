(function () {
  'use strict';

  angular
    .module('manage.services')
    .factory('UploadFilesService', UploadFilesService);

  UploadFilesService.$inject = ['$http', '$state'];

  function UploadFilesService($http, $state) {
    var service = {
      uploadFileToUrl: uploadFileToUrl
    };

    return service;

    function uploadFileToUrl (file, uploadUrl) {
      console.log('in service ' + file);
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined }
      }).success(function(req, res) {
        alert('File uploaded Successfully. Please click Save to save data from the file into database');
        $state.reload();
      })
      .error(function() {
      });
      return fd;
    }
  }
}());
