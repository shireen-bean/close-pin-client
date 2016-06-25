'use strict';

const app = require('../app.js');
const api = require('./api');
const profileApi = require('../profile/profile_api');

const setCurrentProfile = function(data) {
  let profile_id = data.user.profile.id;
  console.log('the profile id is'+profile_id)
  $('.current-profile').val(profile_id)
}

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
  api.getCurrentProfile(data.user.id)
  .done(setCurrentProfile)
  .fail(failure);
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
  signOutSuccess,
  setCurrentProfile,
};
