const app = require('../app.js');

const createProfile = (data) => {
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const updateProfile = function(data){
  return $.ajax({
    url: app.host + '/profiles/' + '1',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};



module.exports = {
  createProfile,

};
