'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const clothingApi = require('./clothing_api');
const clothingUi = require('./clothing_ui');

const onCreateNewShirt = function(event){
  event.preventDefault();
  console.log(event.target)
  let data = getFormFields(event.target);
  clothingApi.createShirt(data)
  .done(clothingUi.createNewShirtSuccess)
  .fail(clothingUi.failure);
};




const addHandlers = () => {
  $('#new-shirt').on('submit', onCreateNewShirt);
};
//
module.exports = {
  addHandlers,
};
