let DataService = function($http,HEROKU,UserService) {

  let locateURL = HEROKU.URL + 'locations';

  this.getLocations = function(userid) {   
    return $http({
      url: locateURL,
      headers: HEROKU.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getUserCheckins = function(userid) {   
    return $http({
      url: HEROKU.URL+'users/' + userid + '/checkins',
      headers: HEROKU.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  // vvvvvvv Not yet implemented vvvvvvv

  this.editCheckin = function(userid, obj) {
    let editURL = checkinURL+userid;
    return $http.put(editURL, obj, HEROKU.CONFIG);
  };

  this.deleteCheckin = function(userid) {
    let deleteURL = checkinURL+userid;
    return $http.delete(deleteURL, obj, HEROKU.CONFIG);
  };

};

DataService.$inject = ['$http','HEROKU','UserService'];

export default DataService;