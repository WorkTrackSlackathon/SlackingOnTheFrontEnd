let DataService = function($http,HEROKU,UserService) {

  let locateURL = HEROKU.URL + 'locations/';
  let checkinURL = HEROKU.URL + 'checkins/';

  this.getLocations = function(userid) {   
    return $http({
      url: locateURL+userid,
      headers: HEROKU.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  this.getCheckins = function(userid) {   
    return $http({
      url: checkinURL+userid,
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