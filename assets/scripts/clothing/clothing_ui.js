'use strict';

const failure = (error) => {
  console.error(error);
};


const createShirtSuccess = function(data){
  console.log(data);
  console.log('new shirt created');
};

const createBottomSuccess = function(data) {
  console.log(data);
  console.log('new bottom created');
};

const createAccessorySuccess = function(data) {
  console.log(data);
  console.log('new accessory created');
};

const createShoesSuccess = function(data) {
  console.log(data);
  console.log('new shoes created');
}


module.exports = {
  failure,
  createShirtSuccess,
  createBottomSuccess,
  createAccessorySuccess,
  createShoesSuccess,
};
