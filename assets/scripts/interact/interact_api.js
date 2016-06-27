const app = require('../app.js');


const getProfile = function(profile_id){
  return $.ajax({
    url: app.host + '/profiles/'+profile_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };


const getShirt = function(shirt_id){
  return $.ajax({
    url: app.host + '/shirts/'+shirt_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };

  const getBottom = function(bottom_id){
    return $.ajax({
      url: app.host + '/bottoms/'+bottom_id,
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

  const getAccessory = function(accessory_id){
    return $.ajax({
      url: app.host + '/accessories/'+accessory_id,
      method: "GET",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
  };

const getShoe = function(shoe_id){
  return $.ajax({
    url: app.host + '/shoes/'+shoe_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteOutfit = function(outfit_id) {
  return $.ajax({
    url: app.host + '/outfits/'+outfit_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getProfile,
  getShirt,
  getBottom,
  getAccessory,
  getShoe,
  deleteOutfit,
};
