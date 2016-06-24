'use strict';

const failure = (error) => {
  console.error(error);
};


const createNewShirtSuccess = function(data){
  console.log(data)
  console.log('new shirt created')
}


module.exports = {
  failure,
  createNewShirtSuccess,
};
