(function () {
  'use strict';

  angular
    .module('manage')
    .controller('MaintainenceController', MaintainenceController);

  MaintainenceController.$inject = ['$scope', '$state', '$http', 'gradeResolve', 'subjectResolve', 'schoolResolve', 'sectionResolve', 'FetchGradesService', 'FetchSubjectsService', 'FetchSchoolsService', 'FetchSectionsService', 'Authentication'];

  function MaintainenceController($scope, $state, $http, grade, subject, school, section, FetchGradesService, FetchSubjectsService, FetchSchoolsService, FetchSectionsService, Authentication) {
    var vm = this;
    vm.grade = grade;
    vm.subject = subject;
    vm.school = school;
    vm.section = section;
    vm.showSchoolsAdditionForm = false;
    vm.showGradesAdditionForm = false;
    vm.showSectionsAdditionForm = false;
    vm.showSubjectsAdditionForm = false;
    vm.showAllGrades = false;
    vm.showSchools = false;
    vm.showAllSections = false;
    vm.showAllSubjects = false;
    vm.schools = FetchSchoolsService.query();
    vm.grades = FetchGradesService.query();
    init();

    function init() {
      // If user is not signed in then redirect back home
      if (!Authentication.user) {
        $state.go('home');
      }
    }

    function generateUUID() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); // use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }

    vm.addSchools = function () {
      if (vm.showSchoolsAdditionForm === false) {
        vm.showSubjectsAdditionForm = false;
        vm.showSectionsAdditionForm = false;
        vm.showGradesAdditionForm = false;
        vm.showSchoolsAdditionForm = true;
      } else {
        vm.showSchoolsAdditionForm = false;
      }
    };

    vm.addGrades = function () {
      if (vm.showGradesAdditionForm === false) {
        vm.showSubjectsAdditionForm = false;
        vm.showSchoolsAdditionForm = false;
        vm.showSectionsAdditionForm = false;
        vm.showGradesAdditionForm = true;
      } else {
        vm.showGradesAdditionForm = false;
      }
    };

    vm.addSections = function () {
      if (vm.showSectionsAdditionForm === false) {
        vm.showSubjectsAdditionForm = false;
        vm.showSchoolsAdditionForm = false;
        vm.showGradesAdditionForm = false;
        vm.showSectionsAdditionForm = true;
      } else {
        vm.showSectionsAdditionForm = false;
      }
    };

    vm.addSubject = function () {
      if (vm.showSubjectsAdditionForm === false) {
        vm.showGradesAdditionForm = false;
        vm.showSchoolsAdditionForm = false;
        vm.showSectionsAdditionForm = false;
        vm.showSubjectsAdditionForm = true;
      } else {
        vm.showSubjectsAdditionForm = false;
      }
    };

    $scope.clearEnteredData = function () {
      if (vm.showGradesAdditionForm === true)
        vm.grade.grade_name = '';
      if (vm.showSchoolsAdditionForm === true)
        vm.school.school_name = '';
      if (vm.showSectionsAdditionForm === true)
        vm.section.section_name = '';
      if (vm.showSubjectsAdditionForm === true)
        vm.subject.subject_name = '';
    };

    //  Add the grades.
    $scope.commitGrades = function(school) {
      if(school === undefined || school === null){
        alert("Please select appropriate values");
        return;
      }


      vm.grade.school_id = school.school_id;
      vm.grade.school_name = school.school_name;
      vm.grade.grade_id = generateUUID();
      vm.grade.$save(successCallback, errorCallback);
      function successCallback(res) {
        $state.go('maintainence', {
          gradeId: res._id
        });
      }

      function errorCallback(res) {
        console.log(res.data.message);
        vm.error = res.data.message;
      }
      $state.reload();
      alert('Grade saved successfully');
    };

    $scope.commitSections = function(grade) {
      if(grade === undefined || grade === null){
        alert("Please select appropriate values");
        return;
      }
      vm.section.grade_id = grade.grade_id;
      vm.section.grade_name = grade.grade_name;
      vm.section.school_id = grade.school_id;
      vm.section.section_id = generateUUID();

      vm.section.$save(successCallback, errorCallback);
      function successCallback(res) {
        $state.go('maintainence', {
          gradeId: res._id
        });
      }

      function errorCallback(res) {
        console.log(res.data.message);
        vm.error = res.data.message;
      }
      $state.reload();
      alert('Section saved successfully');
    };


    $scope.commitSubjects = function(subject) {
      if(subject === undefined || subject === null) {
        alert("Please select subject name");
        return;
      }
      vm.subject.subject_id = generateUUID();
      vm.subject.$save(successCallback, errorCallback);
      function successCallback(res) {
        $state.go('maintainence', {
          subjectId: res._id
        });
      }

      function errorCallback(res) {
        console.log(res.data.message);
        vm.error = res.data.message;
      }
      $state.reload();
      alert('Subject saved successfully');
    };

    $scope.commitSchools = function(school) {
      if(school === undefined || school === null) {
        alert("Please select school name");
        return;
      }
      vm.school.school_id = generateUUID();
      vm.school.$save(successCallback, errorCallback);
      function successCallback(res) {
        $state.go('maintainence', {
          school_id: res._id
        });
      }

      function errorCallback(res) {
        console.log(res.data.message);
        vm.error = res.data.message;
      }
      $state.reload();
      alert('School saved successfully');
    };

    $scope.showAllSchools = function () {
      vm.showSchools = true;
      vm.fetchedSchools = FetchSchoolsService.query();
    };

    $scope.showAllGrades = function () {
      vm.showAllGrades = true;
      vm.fetchedGrades = FetchGradesService.query();
    };

    $scope.showAllSections = function () {
      vm.showAllSections = true;
      vm.fetchedSections = FetchSectionsService.query();
    };

    $scope.showAllSubjects = function () {
      vm.showAllSubjects = true;
      vm.fetchedSubjects = FetchSubjectsService.query();
    };
  }
}());
