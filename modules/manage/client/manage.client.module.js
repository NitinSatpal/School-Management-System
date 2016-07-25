(function (app) {
  'use strict';

  app.registerModule('manage', ['core']);
  app.registerModule('manage.services');
  app.registerModule('manage.routes', ['ui.router', 'core.routes', 'manage.services']);
}(ApplicationConfiguration));
