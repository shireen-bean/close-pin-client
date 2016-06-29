'use strict';
const app = require('../app.js');


const getProfile = function(profile_id){
  return $.ajax({
    url: app.host + '/profiles/'+profile_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };


const getShirt = function(shirt_id){
  return $.ajax({
    url: app.host + '/shirts/'+shirt_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };

  const getBottom = function(bottom_id){
    return $.ajax({
      url: app.host + '/bottoms/'+bottom_id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

  const getAccessory = function(accessory_id){
    return $.ajax({
      url: app.host + '/accessories/'+accessory_id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

const getShoe = function(shoe_id){
  return $.ajax({
    url: app.host + '/shoes/'+shoe_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteOutfit = function(outfit_id) {
  return $.ajax({
    url: app.host + '/outfits/'+outfit_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getTemp = function(city,state){
  let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
  let apiKey = "a08bb8613e20e49e7455d794444cc6f1";
  return $.ajax({
  url: weatherUrl + city + ',' + state + '&APPID=' + apiKey,

});
};

const getAllOutfits = function(){
  return $.ajax({
    url: app.host + '/outfits',
    method: 'GET',
  });
  };

const likeOutfit = function(id){
  return $.ajax({
    url: app.host + '/outfits/'+id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {outfit: {'description': 'liked' }},
  });
};

const dislikeOutfit = function(id){
  return $.ajax({
    url: app.host + '/outfits/'+id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {outfit: {'description': 'disliked' }},
  });
};

module.exports = {
  getProfile,
  getShirt,
  getBottom,
  getAccessory,
  getShoe,
  deleteOutfit,
  // getMedia,
  getTemp,
  getAllOutfits,
  likeOutfit,
  dislikeOutfit,
};

// 'oauth_timestamp='+'1467114372', 'oauth_version='+'1.0',
