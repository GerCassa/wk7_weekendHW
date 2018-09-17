const PubSub = require('../helpers/pub_sub.js');
const HeroView = require('./hero_view.js');

const HeroesListView = function () {
  this.element = document.querySelector('#heroes-list');
}

HeroesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Heroes:all-ready', (event) => {
    // console.log(event.detail);
    this.element.innerHTML = '';
    event.detail.forEach((hero) => {
      const heroView = new HeroView(this.element, hero)
      // console.log(this.element);
      heroView.render();
    });
  });
};

module.exports = HeroesListView;
