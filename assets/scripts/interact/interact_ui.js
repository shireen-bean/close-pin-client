'use strict';

const interactApi = require('./interact_api');

const failure = (error) => {
  console.error(error);
};

// const displayShirt = function(data) {
//   let image = data.shirt.image;
//   console.log(image);
//   $('#display-outfits .outfit:last-child').append("<img src='"+image+"'>")
// };
//
// const displayBottom = function(data) {
//   let image = data.bottom.image;
//   console.log(image);
//   $('#display-outfits .outfit:last-child').append("<img src='"+image+"'>")
// };
//
// const displayAccessory = function(data) {
//   let image = data.accessory.image;
//   console.log(image);
//   $('#display-outfits .outfit:last-child').append("<img src='"+image+"'>")
// };
//
// const displayShoe = function(data) {
//   let image = data.shoe.image;
//   console.log(image);
//   $('#display-outfits .outfit:last-child').append("<img src='"+image+"'>")
// };

const deleteOutfitSuccess = function(){
  console.log('outfit deleted');
}

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

const getMediaSuccess = function(data) {
  console.log('media retrieved');
  console.log(data);
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
}

module.exports = {
  failure,
  getOutfitArray,
  getMediaSuccess,
  getTempSuccess,
};
