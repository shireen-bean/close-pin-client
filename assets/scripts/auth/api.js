'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const getCurrentProfile = function(user_id){
  return $.ajax({
    url: app.host + '/users/'+user_id,
    method: "GET"
  });
  };

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getCurrentProfile,
};
