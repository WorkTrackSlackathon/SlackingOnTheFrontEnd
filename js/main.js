import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';
import 'angular-cookies';
import 'angular-chart.js';

// Import the Config
import config from './config';

// Import Controllers
import RegisterController from './controllers/register.controller';
import AddUserController from './controllers/adduser.controller';
import LoginController from './controllers/login.controller';
import UserController from './controllers/user.controller';
import UserListController from './controllers/userlist.controller';
import NavController from './controllers/nav.controller';
import GraphController from './controllers/graph.controller';

// Import Factories

// Import Services
import UserService from './services/user.service';
import DataService from './services/data.service';

angular
  .module('app', ['ui.router','mm.foundation', 'ngCookies', 'chart.js'])
  .constant('HEROKU', {
    URL: 'https://enigmatic-tundra-6262.herokuapp.com/',
    CONFIG: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })
  .constant('siteURL','www.bob.com')
  .config(config)
  .controller('UserListController', UserListController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('NavController', NavController)
  .controller('UserController',UserController)
  .controller('GraphController', GraphController)
  .service('UserService', UserService)
  .service('DataService', DataService)
;
