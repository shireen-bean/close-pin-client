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



module.exports = {
  createShirt,
  createBottom,
  createAccessory,
  createShoes,
  getAll,
};
