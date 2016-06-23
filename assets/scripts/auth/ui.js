'use strict';

const app = require('../app.js');
const bookApi = require('../books/book-api.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  bookApi.getBooks();
  $('.book-buttons').addClass('show');
  $('.book-buttons').removeClass('hide');
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.book-buttons').removeClass('show');
  $('.book-buttons').addClass('hide');
  $('.book-content').html('');
  $('.title-content').html('');
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
