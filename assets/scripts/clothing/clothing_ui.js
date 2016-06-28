'use strict';

const clothingApi = require('./clothing_api');


const failure = (error) => {
  console.error(error);
};


const createShirtSuccess = function(data){
  console.log(data);
  console.log('new shirt created');
  let image = data.shirt.image
  $('#create-top-modal').modal('hide');
  $('#shirt-success-image').attr('src',image)
  $('#shirt-success').modal('show');
};

const createBottomSuccess = function(data) {
  console.log(data);
  console.log('new bottom created');
  let image = data.bottom.image
  $('#create-bottom-modal').modal('hide');
  $('#bottom-success-image').attr('src',image)
  $('#bottom-success').modal('show');
};

const createAccessorySuccess = function(data) {
  console.log(data);
  console.log('new accessory created');
  let image = data.accessory.image
  $('#create-accessory-modal').modal('hide');
  $('#accessory-success-image').attr('src',image)
  $('#accessory-success').modal('show');
};

const createShoesSuccess = function(data) {
  console.log(data);
  console.log('new shoes created');
  let image = data.shoe.image
  $('#create-shoes-modal').modal('hide');
  $('#shoe-success-image').attr('src',image)
  $('#shoe-success').modal('show');
};

const onSelectTop = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log(id);
  let image_url = $(this).find('img').attr('src');
  console.log(image_url)
  $( "#new-outfit input[name='outfit[shirt_id]']" ).val(id);
  $('#outfit-top').html("<img src='"+image_url+"'>")
};

const onSelectBottom = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log(id);
  let image_url = $(this).find('img').attr('src');
  console.log(image_url)
  $( "#new-outfit input[name='outfit[bottom_id]']" ).val(id);
  $('#outfit-bottom').html("<img src='"+image_url+"'>")
};

const onSelectAccessory = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log(id);
  let image_url = $(this).find('img').attr('src');
  console.log(image_url)
  $( "#new-outfit input[name='outfit[accessory_id]']" ).val(id);
  $('#outfit-accessory').html("<img src='"+image_url+"'>")
};

const onSelectShoes = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log(id);
  let image_url = $(this).find('img').attr('src');
  console.log(image_url)
  $( "#new-outfit input[name='outfit[shoe_id]']" ).val(id);
  $('#outfit-shoes').html("<img src='"+image_url+"'>");
};

const onDeleteTop = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log('will delete this shirt id'+id);
  clothingApi.deleteTop(id)
  .done(function(){console.log('successfully deleted shirt')})
  .fail(failure);
};

const onDeleteBottom = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log('will delete this bottom id'+id);
  clothingApi.deleteBottom(id)
  .done(function(){console.log('successfully deleted bottom')})
  .fail(failure);
};

const onDeleteAccessory = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log('will delete this accessory id'+id);
  clothingApi.deleteAccessory(id)
  .done(function(){console.log('successfully deleted accessory')})
  .fail(failure);
};

const onDeleteShoe = function(event) {
  event.preventDefault();
  let id = $(this).val();
  console.log('will delete this shoe id '+id);
  clothingApi.deleteShoe(id)
  .done(function(){console.log('successfully deleted shoe')})
  .fail(failure);
};

const showAllTopsSuccess = function(data) {
  $('#show-all').html('');
  let shirtsArray = data.profile.shirts;
  console.log(shirtsArray);
  for (let i=0;i<shirtsArray.length;i++){
    if (shirtsArray[i].image !== null){
    $("#show-all").append("<button id='shirt"+shirtsArray[i].id+"' class='shirt-image' data-shirt-index='"+i+"' value='"+shirtsArray[i].id+"'><img src='"+shirtsArray[i].image+"' alt='"+shirtsArray[i].name+"'></button>");
    $("#shirt"+shirtsArray[i].id).append("<button class='delete-shirt' id='delete-shirt"+shirtsArray[i].id+"' value='"+shirtsArray[i].id+"'>Delete "+shirtsArray[i].top_name+"</button>");
    $("#shirt"+shirtsArray[i].id).on('click', onSelectTop)
    $('#delete-shirt'+shirtsArray[i].id).on('click', onDeleteTop)
  }
}
};

const showAllBottomsSuccess = function(data) {
  $('#show-all').html('');
  let bottomsArray = data.profile.bottoms;
  console.log(bottomsArray);
  for (let i=0;i<bottomsArray.length;i++){
    if (bottomsArray[i].image !== null){
    $("#show-all").append("<button id='bottom"+bottomsArray[i].id+"' class='bottom-image' data-bottom-index='"+i+"' value='"+bottomsArray[i].id+"'><img src='"+bottomsArray[i].image+"' alt='"+bottomsArray[i].name+"'></button>");
    $("#bottom"+bottomsArray[i].id).on('click', onSelectBottom)
    $("#bottom"+bottomsArray[i].id).append("<button class='delete-bottom' id='delete-bottom"+bottomsArray[i].id+"' value='"+bottomsArray[i].id+"'>Delete "+bottomsArray[i].bottom_name+"</button>");
    $('#delete-bottom'+bottomsArray[i].id).on('click', onDeleteBottom)
  }
}
};

const showAllAccessoriesSuccess = function(data) {
  $('#show-all').html('');
  let accessoriesArray = data.profile.accessories;
  console.log(accessoriesArray);
  for (let i=0;i<accessoriesArray.length;i++){
    if (accessoriesArray[i].image !== null){
    $("#show-all").append("<button id='accessory"+accessoriesArray[i].id+"' class='accessory-image' data-accessory-index='"+i+"' value='"+accessoriesArray[i].id+"'><img src='"+accessoriesArray[i].image+"' alt='"+accessoriesArray[i].name+"'></button>");
    $("#accessory"+accessoriesArray[i].id).on('click', onSelectAccessory)
    $("#accessory"+accessoriesArray[i].id).append("<button class='delete-accessory' id='delete-accessory"+accessoriesArray[i].id+"' value='"+accessoriesArray[i].id+"'>Delete "+accessoriesArray[i].accessory_name+"</button>");
    $('#delete-accessory'+accessoriesArray[i].id).on('click', onDeleteAccessory)
  }
}
};

const showAllShoesSuccess = function(data) {
  $('#show-all').html('');
  let shoesArray = data.profile.shoes;
  console.log(shoesArray);
  for (let i=0;i<shoesArray.length;i++){
    if (shoesArray[i].image !== null){
      $("#show-all").append("<button id='shoe"+shoesArray[i].id+"' class='shoes-image' data-shoes-index='"+i+"' value='"+shoesArray[i].id+"'><img src='"+shoesArray[i].image+"' alt='"+shoesArray[i].name+"'></button>");
      $("#shoe"+shoesArray[i].id).on('click', onSelectShoes)
      $("#shoe"+shoesArray[i].id).append("<button class='delete-shoe' id='delete-shoe"+shoesArray[i].id+"' value='"+shoesArray[i].id+"'>Delete "+shoesArray[i].name+"</button>");
      $('#delete-shoe'+shoesArray[i].id).on('click', onDeleteShoe)
  }
}
};

const newOutfitSuccess = function(data) {
  console.log(data);
  console.log('new outfit saved!');
  $('#new-outfit h2').text('Outfit Saved!')
};

module.exports = {
  failure,
  createShirtSuccess,
  createBottomSuccess,
  createAccessorySuccess,
  createShoesSuccess,
  showAllTopsSuccess,
  showAllBottomsSuccess,
  showAllAccessoriesSuccess,
  showAllShoesSuccess,
  newOutfitSuccess,
};
