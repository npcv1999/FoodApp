import {IMAGES} from '.';

export const BANNERS = [
  {
    id: 1,
    img: require('../assets/images/banners/banner1.jpg'),
  },
  {
    id: 2,
    img: require('../assets/images/banners/banner2.png'),
  },
  {
    id: 3,
    img: require('../assets/images/banners/banner3.jpg'),
  },
];

export const POPULAR_EAT = [
  {
    image: require('../assets/images/pop_eat.png'),
    title: 'Creamos - Chapel Ln',
    text: 'Chapel Ln, Harriseahead',
    time: '18 mins',
    range: '3 km',
    star: '5.0',
  },
  {
    image: require('../assets/images/nearby.png'),
    title: 'Creamos - Chapel Ln',
    text: 'Chapel Ln, Harriseahead',
    time: '18 mins',
    range: '3 km',
    star: '5.0',
  },
  {
    image: require('../assets/images/pop_eat.png'),
    title: 'Creamos - Chapel Ln',
    text: 'Chapel Ln, Harriseahead',
    time: '18 mins',
    range: '3 km',
    star: '5.0',
  },
];

export const CATEGORIES = [
  {id: 1, img: IMAGES.discount, name: 'Promos'},
  {id: 2, img: IMAGES.steak, name: 'Meal'},
  {id: 3, img: IMAGES.cocktail, name: 'Drink'},
  {id: 4, img: IMAGES.burger, name: 'FastFood'},
  {id: 5, img: IMAGES.macaroons, name: 'Snack'},
];

export const CUISINES = [
  {
    id: 1,
    img: require('../assets/images/New_Zealand.png'),
    name: 'New Zealander',
  },
  {
    id: 2,
    img: require('../assets/images/Italian.png'),
    name: 'Italian',
  },
  {
    id: 3,
    img: require('../assets/images/Italian.png'),
    name: 'Greece',
  },
];

export const DATA = {BANNERS, POPULAR_EAT, CATEGORIES, CUISINES};
