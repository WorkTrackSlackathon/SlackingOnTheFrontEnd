import 'angular';
import 'angular-ui-router';
import 'angular-foundation';
import 'angular-cookies';

// Import the Config
import config from './config';

// Import Controllers
import RegisterController from './controllers/register.controller';
import AddUserController from './controllers/adduser.controller';
import LoginController from './controllers/login.controller';
import UserController from './controllers/user.controller';
import UserListController from './controllers/userlist.controller';

// Import Factories

// Import Services
import UserService from './services/user.service';
import DataService from './services/data.service';

angular
  .module('app', ['ui.router','mm.foundation', 'ngCookies'])
  .constant('HEROKU', {
    URL: 'http://enigmatic-tundra-6262.herokuapp.com/',
    CONFIG: {
      headers: {
        // 'Content-Type': 'application/json',
        // 'Access-Token': '[SOME NUMBER]'
      }
    }
  })
  .config(config)

  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)
  .service('DataService', DataService)
;
