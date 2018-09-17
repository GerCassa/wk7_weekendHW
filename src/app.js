const Heroes = require('./models/heroes.js');
const HeroesListView = require('./views/heroes_list_view.js');
const HeroView = require('./views/hero_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const heroesListView = new HeroesListView;
  heroesListView.bindEvents()


  const heroes = new Heroes;
  heroes.getData();
})
