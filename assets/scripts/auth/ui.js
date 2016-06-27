'use strict';

const app = require('../app.js');
const api = require('./api');
const profileApi = require('../profile/profile_api');

const setCurrentProfile = function(data) {
  $('#sign-in-modal').modal('hide');
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

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  console.log('sign in success')
  $('#sign-up-button').hide();
  $('#sign-in-button').hide();
  $('nav').show();
  $('#user-dropdown').show();
  api.getCurrentProfile(data.user.id)
  .done(setCurrentProfile)
  .fail(failure);
};

const signInSuccessAfterSignUp = function(data) {
  app.user = data.user;
  console.log(app.user);
  console.log('sign in success after sign up')
  console.log(app.user)
  console.log(data)
  profileApi.createProfile(data)
  .done(success)
  .fail(failure);
}

const signInRequest = function(email,pass) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: {"credentials[email]":email, "credentials[password]":pass},
  });
};

const signUpSuccess = function(data){
  console.log(data);
  console.log('sign up success');
  let email = $('#sign-up-email').val();
  let pass = $('#sign-up-pass').val()
  signInRequest(email,pass)
  .done(signInSuccessAfterSignUp)
  .fail(failure);

  // .done(signInSuccess)
  // .fail(failure)
}

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('#browse-all').hide();
  $('#user-dropdown').hide();
  $('nav').hide();
  $('#welcome-page').show();
  $('#sign-up-button').show();
  $('#sign-in-button').show();

};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  setCurrentProfile,
};
