const Heroes = require('./models/heroes.js');
const HeroesListView = require('./views/heroes_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const listElement = document.querySelector('#heroes-list')
  const heroesListView = new HeroesListView(listElement);
  heroesListView.bindEvents()

  const selectElement = document.querySelector('#heroes-attributes');
  const dropdownView = new SelectView(selectElement);
  dropdownView.bindEvents();

  const heroes = new Heroes;
  heroes.getData();
  heroes.bindEvents();
})
