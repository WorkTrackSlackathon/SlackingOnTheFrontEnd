import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

// Import the Config
import config from './config';

// Import Controllers
import LoginController from './controllers/login.controller';

// Import Factories

// Import Services
import UserService from './services/user.service';


angular
  .module('app', ['ui.router','mm.foundation'])
  .constant('HEROKU', {
    URL: 'http://enigmatic-tundra-6262.herokuapp.com/',
    CONFIG: {
      headers: {
        'Method': '[method.type]',
        'Access-Token': '[SOME NUMBER]'
      }
    }
  })
  .config(config)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)
;