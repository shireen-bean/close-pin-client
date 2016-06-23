'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signUpSuccess = function(data){
  console.log(data);
  console.log('sign up success');
}

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  console.log('sign in success')
  $('.current-user').val(data.user.id)
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.book-buttons').removeClass('show');
  $('.book-buttons').addClass('hide');
  $('.book-content').html('');
  $('.title-content').html('');
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess
};
