import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

// Import the Config
import config from './config';

// Import Controllers
import RegisterController from './controllers/register.controller';

// Import Factories

// Import Services
import UserService from './services/user.service';

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
  // .controller('SingleUserController', SingleController)
  // .controller('ListUserController', ListController)
  // .controller('AddUserController', AddController)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService)
;