'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const interactApi = require('./interact_api');
const interactUi = require('./interact_ui');

const onBrowse = function(event) {
  event.preventDefault();
  console.log('browse clicked');
  $('#welcome-page').hide();
  $('#display-outfits').hide();
  $('#browse-all').show();
  $('#new-outfit legend').text('Build an Outfit!')
};

const onAddNew = function(event) {
  event.preventDefault();
  console.log('add new something clicked');
  $('#add-new-modal').modal('show');
};

const onCreateTopChosen = function(event) {
  event.preventDefault();
  $('#add-new-modal').modal('hide');
  $('#create-top-modal').modal('show');
};

const onCreateBottomChosen = function(event) {
  event.preventDefault();
  $('#add-new-modal').modal('hide');
  $('#create-bottom-modal').modal('show');
};

const onCreateAccessoryChosen = function(event) {
  event.preventDefault();
  console.log('create new accessory modal to pop up');
  $('#add-new-modal').modal('hide');
  $('#create-accessory-modal').modal('show');
};

const onCreateShoesChosen = function(event) {
  event.preventDefault();
  console.log('create new accessory modal to pop up');
  $('#add-new-modal').modal('hide');
  $('#create-shoes-modal').modal('show');
};

const onPins = function(event) {
  console.log('pins clicked');
  $('#welcome-page').hide();
  $('#browse-all').hide();
  $('#display-outfits').show();
  let profile_id = $('.current-profile').val();
  interactApi.getProfile(profile_id)
  .done(interactUi.getOutfitArray)
  .fail(interactUi.failure);
}


const addHandlers = () => {
  $('#browse-all').hide();
  $('#display-outfits').hide();
  $('nav').hide();
  $('#browse').on('click', onBrowse);
  $('#add-new').on('click', onAddNew);
  $('#add-top-option').on('click', onCreateTopChosen);
  $('#add-bottom-option').on('click',onCreateBottomChosen);
  $('#add-shoes-option').on('click',onCreateShoesChosen);
  $('#add-accessory-option').on('click',onCreateAccessoryChosen);


  $('#pins').on('click',onPins);
};


module.exports = {
  addHandlers,
};
