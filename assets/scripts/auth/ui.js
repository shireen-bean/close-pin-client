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

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  console.log('sign in success')
  api.getCurrentProfile(data.user.id)
  .done(setCurrentProfile)
  .fail(failure);
};

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
  // $('#sign-in-email').val(email)
  // $('#sign-in-pass').val(pass)
  .done(signInSuccess)
  .fail(failure)
}

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
