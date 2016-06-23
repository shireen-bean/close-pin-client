'use strict';

const app = require('../app.js');

const failure = (error) => {
  console.error(error);
};


const createProfileSuccess = (data) => {
  console.log('data is'+data)
  // profile.user_id = app.user;
  // console.log(profile.user_id);
  console.log('profile sucessfully created')
};




module.exports = {
  failure,
  createProfileSuccess,
};
