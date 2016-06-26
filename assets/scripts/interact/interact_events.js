const getFormFields = require('../../../lib/get-form-fields');

const api = require('./interact_api');
const ui = require('./interact_ui');

const onBrowse = function(event) {
  event.preventDefault();
  console.log('browse clicked')
  $('#welcome-page').hide();
  $('#browse-all').show();
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
  //add profile if not already there
};





const addHandlers = () => {
  $('nav').hide();
  $('#browse').on('click', onBrowse);
  $('#add-new').on('click', onAddNew);
  $('#add-top-option').on('click', onCreateTopChosen);
  $('#add-bottom-option').on('click',function(){$('#create-bottom-modal').modal('show');});
  $('#add-shoes-option').on('click',function(){$('#create-shoes-modal').modal('show');});
  $('#add-accessory-option').on('click',function(){$('#create-accessory-modal').modal('show');});
};


module.exports = {
  addHandlers,
};
