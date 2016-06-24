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





module.exports = {
  createShirt,

};
