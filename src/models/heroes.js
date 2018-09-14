const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Heroes = function () {
  this.data = [];
};

Heroes.prototype.getData = function () {
  request = new RequestHelper('https://api.opendota.com/api/heroes');
  request.get(data => {
    this.data = data;
   // console.log(this.data);
   PubSub.publish('Heroes:all-ready', this.data);
  })
};

module.exports = Heroes;
