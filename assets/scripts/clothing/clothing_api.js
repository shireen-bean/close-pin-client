'use strict';

const app = require('../app.js');

const createShirt = function(data) {
  return $.ajax({
    url: app.host + '/shirts',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const createBottom = function(data) {
  return $.ajax({
    url: app.host + '/bottoms',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const createAccessory = function(data) {
  return $.ajax({
    url: app.host + '/accessories',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const createShoes = function(data) {
  return $.ajax({
    url: app.host + '/shoes',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const getAll = function(profile_id){
  return $.ajax({
    url: app.host + '/profiles/'+profile_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  };

const newOutfit = function(data) {
  return $.ajax({
    url: app.host + '/outfits',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const deleteTop = function(shirt_id) {
  return $.ajax({
    url: app.host + '/shirts/'+shirt_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteBottom = function(bottom_id) {
  return $.ajax({
    url: app.host + '/bottoms/'+bottom_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteAccessory = function(accessory_id) {
  return $.ajax({
    url: app.host + '/accessories/'+accessory_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteShoe = function(shoe_id) {
  return $.ajax({
    url: app.host + '/shoes/'+shoe_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};



module.exports = {
  createShirt,
  createBottom,
  createAccessory,
  createShoes,
  getAll,
  newOutfit,
  deleteTop,
  deleteBottom,
  deleteAccessory,
  deleteShoe,
};
