'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onToggleSignUp = function(event){
  event.preventDefault();
  $('#sign-in-modal').modal('hide');
  $('#sign-up-modal').modal('show');
};

const onToggleSignIn = function(event){
  event.preventDefault();
  $('#sign-up-modal').modal('hide');
  $('#sign-in-modal').modal('show');
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);

  $('#sign-in-button').on('click', function(){$('#sign-in-modal').modal('show');});
  $('#sign-up-button').on('click', function(){$('#sign-up-modal').modal('show');});
  $('#change-password-button').on('click', function(){$('#change-password-modal').modal('show');});
  $('#toggle-sign-up').on('click',onToggleSignUp);
  $('#toggle-sign-in').on('click',onToggleSignIn);
};
//
module.exports = {
  addHandlers,
};
