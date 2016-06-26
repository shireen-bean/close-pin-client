'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const clothingApi = require('./clothing_api');
const clothingUi = require('./clothing_ui');

const onCreateShirt = function(event){
  event.preventDefault();
  console.log(event.target);
  let data = getFormFields(event.target);
  clothingApi.createShirt(data)
  .done(clothingUi.createShirtSuccess)
  .fail(clothingUi.failure);
};

const onCreateBottom = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  clothingApi.createBottom(data)
  .done(clothingUi.createBottomSuccess)
  .fail(clothingUi.failure);
};

const onCreateAccessory = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  clothingApi.createAccessory(data)
  .done(clothingUi.createAccessorySuccess)
  .fail(clothingUi.failure);
};

const onCreateShoes = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  clothingApi.createShoes(data)
  .done(clothingUi.createShoesSuccess)
  .fail(clothingUi.failure);
}



const addHandlers = () => {
  $('#new-shirt').on('submit', onCreateShirt);
  $('#new-bottom').on('submit', onCreateBottom);
  $('#new-accessory').on('submit', onCreateAccessory);
  $('#new-shoes').on('submit', onCreateShoes);
};
//
module.exports = {
  addHandlers,
};
