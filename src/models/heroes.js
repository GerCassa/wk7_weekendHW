const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const createAppend = require('../helpers/create_append.js');


const Heroes = function () {
  this.data = [];
};

Heroes.prototype.getData = function () {
    const requestInfo = new RequestHelper('https://api.opendota.com/api/heroes');
  requestInfo.get(data => {
    this.data = data;
    const attributes = this.returnAttribute()
   // console.log(this.data);
  })
};

Heroes.prototype.bindEvents = function () {
  PubSub.subscribe('FilterView:attribute', event => {
    PubSub.publish('Heroes:all-ready', this.filterHeroes(event.detail));
  })
};

Heroes.prototype.returnAttribute = function () {
  const heroesAttribute = this.data
  .map(heroes => heroes.primary_attr)
  .filter((primary_attr, index, attributes) => attributes.indexOf(primary_attr) === index);
  PubSub.publish('Heroes:attributes', heroesAttribute);
};

Heroes.prototype.filterHeroes = function (attribute) {
  return this.data.filter(hero => hero.primary_attr === attribute)
};

module.exports = Heroes;
