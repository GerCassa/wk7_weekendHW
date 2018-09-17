const CreateAppend = require('../helpers/create_append.js');

const HeroView = function (container,hero) {
  this.container = container;
  this.hero = hero;
}

HeroView.prototype.render = function () {
  // console.log(this.container);
  const name = new CreateAppend('h3', this.hero.localized_name, this.container);

  // const image = new Image(200, 150)
  // image.src = 'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_lg.png'
  // this.container.appendChild(image);

  const attack_type = `Attack Type: ${this.hero.attack_type}`;
  const attribute = `Main Attribute: ${this.hero.primary_attr}`;

  const list = new CreateAppend('ul', '', this.container);
  const attr = new CreateAppend('li', attribute, list);
  const attk = new CreateAppend('li', attack_type, list);
  const roles = new CreateAppend('li', `Roles: ${this.hero.roles}`, list)
};


module.exports = HeroView;
