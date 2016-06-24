'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');
const profileEvents = require('./profile/profile_events.js');
const clothingEvents = require('./clothing/clothing_events.js');
require('./example');

$(() => {
  $('head').append('<link rel="stylesheet" href="./assets/styles/style.css">');
  authEvents.addHandlers();
  profileEvents.addHandlers();
  clothingEvents.addHandlers();
});
