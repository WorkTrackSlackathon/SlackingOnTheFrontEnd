let UserService = function($http, HEROKU, $cookies, $state) {
  
  console.log(HEROKU);
  
  this.checkAuth = function () {

    let token = $cookies.get('auth-token');

    HEROKU.CONFIG.headers['Access-Token'] = token;
    
    // Something's funky here:
    if (token) {
      return $http.get(HEROKU.URL + 'check', HEROKU.CONFIG);
    } else {
      $state.go('root.login');
    }

  };

  this.sendLogin = function (userObj) {
    console.log(userObj);
    return $http.post(HEROKU.URL + 'login', userObj, HEROKU.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('auth-token', res.data.auth_token);
    HEROKU.CONFIG.headers['Access-Token'] = res.data.auth_token;
    $state.go('root.list');
  };

  this.logout = function () {
    $cookies.remove('auth-token');
    HEROKU.CONFIG.headers['Access-Token'] = null;
    $state.go('root.login');
  };

  let Registration = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.mgr_id = user.mgr_id;
    this.role = user.role;
  };

  this.addEmployee = function (id) {
    let newEmployee = new Registration(id);
    return $http.post(url, newEmployee, HEROKU.CONFIG);
  };

};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;
