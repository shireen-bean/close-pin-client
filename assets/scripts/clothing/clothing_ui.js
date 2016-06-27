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
};

const showAllTopsSuccess = function(data) {
  $('#show-all').html('');
  let shirtsArray = data.profile.shirts;
  console.log(shirtsArray);
  for (let i=0;i<shirtsArray.length;i++){
    if (shirtsArray[i].image !== null){
    $("#show-all").append("<img src='"+shirtsArray[i].image+"' alt='"+shirtsArray[i].name+"'>")
  }
}
};

const showAllBottomsSuccess = function(data) {
  $('#show-all').html('');
  let bottomsArray = data.profile.bottoms;
  console.log(bottomsArray);
  for (let i=0;i<bottomsArray.length;i++){
    if (bottomsArray[i].image !== null){
    $("#show-all").append("<img src='"+bottomsArray[i].image+"' alt='"+bottomsArray[i].name+"'>")
  }
}
};


module.exports = {
  failure,
  createShirtSuccess,
  createBottomSuccess,
  createAccessorySuccess,
  createShoesSuccess,
  showAllTopsSuccess,
  showAllBottomsSuccess,
};
