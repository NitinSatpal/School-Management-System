(function () {
  'use strict';

  angular
    .module('manage.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('managelessons', {
        url: '/managelessons',
        templateUrl: 'modules/manage/client/views/manage.client.view.html',
        controller: 'ManageLessonsController',
        controllerAs: 'vm',
        resolve: {
          fileSaveResolve: fileSave,
          specificFileSaveResolve: specificFileSave
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Manage Lessons'
        }
      })
      .state('maintainence', {
        url: '/manage',
        templateUrl: 'modules/manage/client/views/maintainence.client.view.html',
        controller: 'MaintainenceController',
        controllerAs: 'vm',
        resolve: {
          schoolResolve: newSchool,
          gradeResolve: newGrade,
          sectionResolve: newSection,
          subjectResolve: newSubject
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Manage Lessons'
        }
      })
      .state('maintainence.school', {
        url: '/manage',
        templateUrl: 'modules/manage/client/views/maintainence.client.view.html',
        controller: 'MaintainenceController',
        controllerAs: 'vm',
        resolve: {
          schoolResolve: newSchool,
          gradeResolve: newGrade,
          sectionResolve: newSection,
          subjectResolve: newSubject
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Manage Lessons'
        }
      });
  }

  newGrade.$inject = ['AddGradesService'];

  function newGrade(AddGradesService) {
    return new AddGradesService();
  }

  newSubject.$inject = ['AddSubjectsService'];

  function newSubject(AddSubjectsService) {
    return new AddSubjectsService();
  }

  newSchool.$inject = ['AddSchoolService'];
  function newSchool(AddSchoolService) {
    return new AddSchoolService();
  }

  newSection.$inject = ['AddSectionService'];
  function newSection(AddSectionService) {
    return new AddSectionService();
  }

  fileSave.$inject = ['SaveDataService'];
  function fileSave(SaveDataService) {
    return new SaveDataService();
  }

  specificFileSave.$inject = ['SaveSpecificFileDatasService'];
  function specificFileSave(SaveSpecificFileDatasService) {
    return new SaveSpecificFileDatasService();
  }
}());
