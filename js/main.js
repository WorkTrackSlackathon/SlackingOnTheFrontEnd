import 'angular-ui-router';
import 'angular-foundation';

// Import the Config
import config from './config';

// Import Controllers

import AddUserController from './controllers/adduser.controller';
import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';
import UserController from './controllers/user.controller';
import UserListController from './controllers/userlist.controller';

// Import Factories

// Import Services

import UserService from './services/user.service';
import DataService from './services/data.service';

angular
  .module('app', ['ui.router','mm.foundation'])
  .constant('HEROKU', {
    URL: 'wrecking-face.herokuapp.DOMINATED',
    CONFIG: {
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': '[SOME NUMBER]'
      }
    }
  })
  .config(config)
  .controller('LoginController', LoginController)
  // .controller('UserController', UserController)
  // .controller('ListUserController', ListUserController)
  // .controller('AddUserController', AddUserController)
  .service('UserService', UserService)
  .service('DataService', DataService)
;
