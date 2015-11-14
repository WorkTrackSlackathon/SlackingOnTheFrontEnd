let UserService = function($http, HEROKU, $cookies, $state) {
  
  console.log(HEROKU);
  
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    HEROKU.CONFIG.headers['X-AUTH-TOKEN'] = token;
    
    if (token) {
      return $http.get(HEROKU.URL + 'check', HEROKU.CONFIG);
    } else {
      $state.go('root.login');
    }

  };

  this.sendLogin = function (userObj) {
    return $http.post(HEROKU.URL + 'login', userObj, HEROKU.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('authToken', res.data.auth_token);
    HEROKU.CONFIG.headers['X-AUTH-TOKEN'] = res.data.auth_token;
    $state.go('root.home');
  };

  this.logout = function () {
    $cookies.remove('authToken');
    HEROKU.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };

  this.register = function () {
    // take data from template and send (post request) to server
    // $cookies.post()
  };

};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;
