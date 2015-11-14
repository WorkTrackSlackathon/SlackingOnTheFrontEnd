import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

// Import the Config
import config from './config';

// Import Controllers

// Import Factories

// Import Services

angular
  .module('app', ['ui.router','mm.foundation'])
  .constant('HEROKU', {
    URL: 'wrecking-face.herokuapp.DOMINATED',
    CONFIG: {
      headers: {
        'Method': '[method.type]',
        'Access-Token': '[SOME NUMBER]'
      }
    }
  })
  .config(config)
  .controller('SingleUserController', SingleController)
  .controller('ListUserController', ListController)
  .controller('AddUserController', AddController)
  .service('UserService', UserService)
;