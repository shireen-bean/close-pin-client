'use strict';

const interactApi = require('./interact_api');

const failure = (error) => {
  console.error(error);
};

const deleteOutfitSuccess = function(){
  console.log('outfit deleted');
};

const onDeleteOutfit = function(event){
  event.preventDefault();
  let outfit_id = $(this).val();
  interactApi.deleteOutfit(outfit_id)
  .done(deleteOutfitSuccess)
  .fail(failure)
}

const getOutfitArray = function(data) {
  $('#display-outfits').html('');
  let outfitArray = data.profile.outfits;
  console.log(outfitArray);
  if (outfitArray.length == 0) {
    $('#display-outfits').html('<h4> You dont have any outfits yet! Make some in the BROWSE tab </h4>');
  } else {
  for (let i=0;i<outfitArray.length;i++){
    $('#display-outfits').append("<div class='outfit' id='outfit"+outfitArray[i].id+"'></div>");
    $("#outfit"+outfitArray[i].id).append("<button class='delete-outfit-button' id='delete-outfit"+outfitArray[i].id+"' value='"+outfitArray[i].id+"'>Delete</button>");
    $("#delete-outfit"+outfitArray[i].id).on('click',onDeleteOutfit);
    let shirt_id = outfitArray[i].shirt_id;
    console.log(shirt_id);
    interactApi.getShirt(shirt_id)
    .done(
      function(data) {
        let image = data.shirt.image;
        console.log(image);
        $("#outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
      })
    .fail(failure);
    let bottom_id = outfitArray[i].bottom_id;
    console.log(bottom_id);
    interactApi.getBottom(bottom_id)
    .done(function(data) {
      let image = data.bottom.image;
      console.log(image);
      $("#outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
    let accessory_id = outfitArray[i].accessory_id;
    console.log(accessory_id);
    interactApi.getAccessory(accessory_id)
    .done(function(data) {
      let image = data.accessory.image;
      console.log(image);
      $("#outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
    let shoe_id = outfitArray[i].shoe_id;
    console.log(shoe_id);
    interactApi.getShoe(shoe_id)
    .done(function(data) {
      let image = data.shoe.image;
      console.log(image);
      $("#outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
  }
}
};

const onLikeOutfit = function(event){
  event.preventDefault();
  console.log('liked');
  let item = $(this)
  item.parent().css('border','5px solid red')
  console.log(item);
};

const getAllOutfitsArray = function(data){
  console.log('get all outfits success');
  console.log(data);
  $('#display-feed').html('');
  let outfitArray = data.outfits;
  console.log(outfitArray);
  if (outfitArray.length == 0) {
    $('#display-feed').html('<h4> Be the first to post an outfit! </h4>');
  } else {
  for (let i=0;i<outfitArray.length;i++){
    $('#display-feed').append("<div class='outfit' id='all-outfit"+outfitArray[i].id+"'></div>");
    $("#all-outfit"+outfitArray[i].id).append("<button class='like-outfit-button' id='like-outfit"+outfitArray[i].id+"' value='"+outfitArray[i].id+"'>Like</button>");
    $("#like-outfit"+outfitArray[i].id).on('click',onLikeOutfit);
    // $("#all-outfit"+outfitArray[i].id).append("<button class='delete-outfit-button' id='delete-outfit"+outfitArray[i].id+"' value='"+outfitArray[i].id+"'>Delete</button>");
    // $("#delete-outfit"+outfitArray[i].id).on('click',onDeleteOutfit);
    let shirt_id = outfitArray[i].shirt_id;
    interactApi.getShirt(shirt_id)
    .done(
      function(data) {
        let image = data.shirt.image;
        console.log(image);
        $("#all-outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
      })
    .fail(failure);
    let bottom_id = outfitArray[i].bottom_id;
    interactApi.getBottom(bottom_id)
    .done(function(data) {
      let image = data.bottom.image;
      console.log(image);
      $("#all-outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
    let accessory_id = outfitArray[i].accessory_id;
    interactApi.getAccessory(accessory_id)
    .done(function(data) {
      let image = data.accessory.image;
      $("#all-outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
    let shoe_id = outfitArray[i].shoe_id;
    interactApi.getShoe(shoe_id)
    .done(function(data) {
      let image = data.shoe.image;
      console.log(image);
      $("#all-outfit"+outfitArray[i].id).append("<img src='"+image+"'>")
    })
    .fail(failure);
  }
  }
  };

const getTempSuccess = function(data) {
  console.log('get temp success');
  console.log(data.list[0]);
  console.log(data.list[0].dt_txt.split(" ")[0].split("-")[1] +"/"+ data.list[0].dt_txt.split(" ")[0].split("-")[2]);
  for (let i=0;i<=29;i+=4) {
    let date = data.list[i].dt_txt.split(" ")[0].split("-")[1] +"/"+ data.list[i].dt_txt.split(" ")[0].split("-")[2];
    $('#display-weather').append("<div class='weather-day' id='weather"+i+"'></div>")
      $('#weather'+i).append("<div class='weather-date'><p>"+date+"</p></div>")
    $('#weather'+i).append("<div class='weather-description'><p>Forecast:"+data.list[i].weather[0].description+"</p></div>")
    // console.log(data.list[i].weather[0].description)
  }
};

module.exports = {
  failure,
  getOutfitArray,
  getTempSuccess,
  getAllOutfitsArray,
};
