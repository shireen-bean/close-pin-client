const app = require('../app.js');

const createProfile = function(user_id) {
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {"profile[user_id]": user_id},
  });
};

const updateProfile = function(data){
  return $.ajax({
    url: app.host + '/profiles/' + data.profile.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};



module.exports = {
  createProfile,

};
