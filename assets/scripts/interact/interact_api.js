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

// const getMedia = function() {
//   return $.ajax({
//     url: 'https://api.twitter.com/1.1/search/tweets.json',
//     method: 'GET',
//     data: 'q=%23fashion',
//     headers: {
//       Authorization: '{"OAuth oauth_consumer_key="+"C5lzONPgJ2AqMbEBCPLmuMjrU", "oauth_nonce="+"e578bbc956c4bd617ad54553484b4e5f", "oauth_signature="+"tXBW%2B2t%2FG5493d2LP4rLax2NhLU%3D", "oauth_signature_method="+"HMAC-SHA1", "oauth_timestamp="+"1467114372", "oauth_version="+"1.0"}',
//   });
//   };

module.exports = {
  getProfile,
  getShirt,
  getBottom,
  getAccessory,
  getShoe,
  deleteOutfit,
};

// 'oauth_timestamp='+'1467114372', 'oauth_version='+'1.0',
