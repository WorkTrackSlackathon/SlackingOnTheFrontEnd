let UserService = function($http, HEROKU, $cookies, $state) {
  
  // console.log(HEROKU);
  
  this.checkAuth = function () {

    let token = $cookies.get('authToken');

    HEROKU.CONFIG.headers['Access-Token'] = token;
    
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
    HEROKU.CONFIG.headers['Access-Token'] = res.data.auth_token;
    $state.go('root.home');
  };

  this.logout = function () {
    $cookies.remove('authToken');
    HEROKU.CONFIG.headers['Access-Token'] = null;
    $state.go('root.login');
  };

  let register = function (name,email,pass,mgrId,role) {
    // take data from template and send (post request) to server
    // $cookies.post()
    let newuser = {User:{
        this.name = name,
        this.email = email,
        this.password = pass,
        this.mgr_id = mgrId,
        this.role = role
      }
    }
    return $http.post(HEROKU.URL + 'signup', newuser, HEROKU.CONFIG);
  };

};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;
