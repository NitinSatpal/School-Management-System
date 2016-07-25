(function () {
  'use strict';

  angular
    .module('manage')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Manage Lessons',
      state: 'managelessons'
    });
    menuService.addMenuItem('topbar', {
      title: 'Add Grades / Subjects',
      state: 'maintainence'
    });
  }
}());
