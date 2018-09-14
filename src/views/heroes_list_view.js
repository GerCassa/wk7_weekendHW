const PubSub = require('../helpers/pub_sub.js');

const HeroesListView = function (element) {
  this.element = element;
}

HeroesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Heroes:all-ready', (event) => {
    // console.log(event.detail);
    this.element.innerHTML = '';
    element.detail.forEach(hero => {
      const heroView = new HeroView(this.element, hero)
      heroView.render();
    })
  })
};

module.exports = HeroesListView;
