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
    $("#show-all").append("<img data-shirt-id='"+shirtsArray[i].id+"'src='"+shirtsArray[i].image+"' alt='"+shirtsArray[i].name+"'>")
  }
}
};

const showAllBottomsSuccess = function(data) {
  $('#show-all').html('');
  let bottomsArray = data.profile.bottoms;
  console.log(bottomsArray);
  for (let i=0;i<bottomsArray.length;i++){
    if (bottomsArray[i].image !== null){
    $("#show-all").append("<img data-bottom-id='"+bottomsArray[i].id+"' src='"+bottomsArray[i].image+"' alt='"+bottomsArray[i].name+"'>")
  }
}
};

const showAllAccessoriesSuccess = function(data) {
  $('#show-all').html('');
  let accessoriesArray = data.profile.accessories;
  console.log(accessoriesArray);
  for (let i=0;i<accessoriesArray.length;i++){
    if (accessoriesArray[i].image !== null){
    $("#show-all").append("<img data-accessory-id='"+accessoriesArray[i].id+"' src='"+accessoriesArray[i].image+"' alt='"+accessoriesArray[i].name+"'>")
  }
}
};

const showAllShoesSuccess = function(data) {
  $('#show-all').html('');
  let shoesArray = data.profile.shoes;
  console.log(shoesArray);
  for (let i=0;i<shoesArray.length;i++){
    if (shoesArray[i].image !== null){
    $("#show-all").append("<img data-shoes-id='"+shoesArray[i].id+"'src='"+shoesArray[i].image+"' alt='"+shoesArray[i].name+"'>")
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
  showAllAccessoriesSuccess,
  showAllShoesSuccess,
};
