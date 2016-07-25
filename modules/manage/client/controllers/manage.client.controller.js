(function () {
  'use strict';

  angular
    .module('manage')
    .controller('ManageLessonsController', ManageLessonsController);

  ManageLessonsController.$inject = ['$scope', '$state', '$http', 'FetchFileDatasService', 'SaveSpecificFileDatasService', 'FetchSpecificFileDatasService', 'FetchGradesService', 'FetchSubjectsService', 'UploadFilesService', 'SaveDataService', 'fileSaveResolve', 'specificFileSaveResolve', 'Authentication'];

  function ManageLessonsController($scope, $state, $http, FetchFileDatasService, SaveSpecificFileDatasService, FetchSpecificFileDatasService, FetchGradesService, FetchSubjectsService, UploadFilesService, SaveDataService, filesave, specificFileSave, Authentication) {
    var vm = this;
    vm.filesave = filesave;
    vm.specificFileSave = specificFileSave;
    vm.uploadLesson = false;
    vm.editableRow = false;
    vm.editedName;
    vm.showGrades = FetchGradesService.query();
    vm.showSubjects = FetchSubjectsService.query();
    init();

    function init() {
      // If user is not signed in then redirect back home
      if (!Authentication.user) {
        $state.go('home');
      }
    }

    $scope.showLessons = function(grade, subject) {
      var isValid = validate(grade, subject);
      if (isValid === false)
        alert('Please select grade and subject to proceed');
      else {
        vm.uploadLesson = false;
        $scope.dataFiles = FetchFileDatasService.query({ grade: grade.grade_name, subject: subject.subject_name });
      }
    };

    $scope.editSchoolLessonName = function (dataFileId) {
      vm.editableRow = true;
      $scope.editableDataFiles = FetchSpecificFileDatasService.query({ id: dataFileId });
    };

    $scope.saveDataFile = function (dataFile) {
      console.log(dataFile.school_specific_lesson_name);
      vm.specificFileSave.school_specific_lesson_name = dataFile.school_specific_lesson_name;
      vm.specificFileSave.$update({ id: dataFile._id }, successCallback, errorCallback);
      function successCallback(res) {
        console.log('success');
      }

      function errorCallback(res) {
        console.log('error');
      }

      alert('Name edited successfully');
      vm.editableRow = false;
      $scope.dataFiles = FetchFileDatasService.query({ grade: dataFile.grade_name, subject: dataFile.subject_name });
    };

    $scope.saveData = function (dataFile) {
      vm.filesave.$save(successCallback, errorCallback);
      function successCallback(res) {
        console.log('success');
      }

      function errorCallback(res) {
        console.log('error');
      }
      alert('Data saved to database successfully');
    };

    $scope.addLessons = function(grade, subject) {
      vm.uploadLesson = true;
    };


    function validate (grade, subject) {
      if (grade === undefined || subject === undefined)
        return false;

      return true;
    }

    $scope.uploadFile = function() {
      var file = $scope.myFile;
      console.log('file is');
      console.log(file);
      var uploadUrl = "/fileUpload/";
      UploadFilesService.uploadFileToUrl(file, uploadUrl);
    };
  }
}());
