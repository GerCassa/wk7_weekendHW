const PubSub = require('../helpers/pub_sub.js');
const createAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Heroes:attributes', event => {
    event.detail.forEach(attribute => {
      const item = createAppend('option', attribute, this.element);
      item.value = attribute;
    })
  })

  this.element.addEventListener('change', event => {
    PubSub.publish('FilterView:attribute', event.target.value);
  })
}

module.exports = SelectView;
