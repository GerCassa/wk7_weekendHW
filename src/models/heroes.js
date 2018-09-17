const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Heroes = function () {
  this.data = [];
};

Heroes.prototype.getData = function () {
    const requestInfo = new RequestHelper('https://api.opendota.com/api/heroes');
  requestInfo.get(data => {
    this.data = data;
    PubSub.publish('Heroes:all-ready', this.data);
   // console.log(this.data);
  })
};

module.exports = Heroes;
