'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const profileApi = require('./profile_api');
const profileUi = require('./profile_ui');

const onCreateProfile = function(event) {
  event.preventDefault();
  console.log(event.target)
  let data = getFormFields(event.target);
  profileApi.createProfile(data)
  .done(profileUi.createProfileSuccess)
  .fail(profileUi.failure);
};




const addHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
};
//
module.exports = {
  addHandlers,
};
