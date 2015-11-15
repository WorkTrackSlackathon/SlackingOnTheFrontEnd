let UserService = function($http, HEROKU, $cookies, $state) {

  this.checkAuth = function () {
    let token = $cookies.get('auth-token');
    if (token) {
      HEROKU.CONFIG.headers['Access-Token'] = token;
    } else {
      $state.go('root.login');
    }
  };

  this.sendLogin = function (userObj) {
    return $http.post(HEROKU.URL + 'login', userObj, HEROKU.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('auth-token', res.data.user.auth_token);
    HEROKU.CONFIG.headers['Access-Token'] = res.data.user.auth_token;
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
  };

  this.getEmployees = function() {
    return $http.get(HEROKU.URL + 'users', HEROKU.CONFIG);
  };

  this.addEmployee = function (id) {
    let newEmployee = new Registration(id);
    return $http.post(HEROKU.URL + 'signup', newEmployee, HEROKU.CONFIG);
  };

  this.getEmployees = function () {
    let token = $cookies.get('auth-token');
    console.log(token);
    return $http({
      url: HEROKU.URL + 'users',
      headers: HEROKU.CONFIG.headers,
      method: 'GET',
      // cache: true
    });
  };

  this.getEmployee = function (empId) {
    return $http({
      method: 'GET',
      url: HEROKU.URL + 'users/' + empId,
      headers: HEROKU.CONFIG.headers
      // cache: true
    });
  };

};

UserService.$inject = ['$http', 'HEROKU', '$cookies', '$state'];

export default UserService;