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

export const MENU = [
  {
    title: 'Special delivery',
    items: [
      {
        title: 'Shrimp pizza',
        kcal: 475,
        detail: 'Shrimp, mushroom, cheese, tomato',
        price: '12.00',
        oldPrice: '20.00',
      },
      {
        title: 'Pinnacle pizza',
        kcal: 500,
        detail: 'Luna’s howl, hush, delirium, revoker',
        price: '99.00',
        oldPrice: '20.00',
      },
      {
        title: 'House Stoke Pizza ',
        kcal: 500,
        detail: 'Pig, pog, pet, pird',
        price: '15.00',
        oldPrice: '20.00',
      },
    ],
  },
  {
    title: 'Hot Deals',
    items: [
      {
        title: 'Hot Deals Shrimp pizza',
        kcal: 475,
        detail: 'Shrimp, mushroom, cheese, tomato',
        price: '12.00',
        oldPrice: '20.00',
      },
      {
        title: 'Hot Deals Pinnacle pizza',
        kcal: 500,
        detail: 'Luna’s howl, hush, delirium, revoker',
        price: '99.00',
        oldPrice: '20.00',
      },
      {
        title: 'Hot Deals House Stoke Pizza ',
        kcal: 500,
        detail: 'Pig, pog, pet, pird',
        price: '15.00',
        oldPrice: '20.00',
      },
    ],
  },
  {
    title: 'Hot Deals',
    items: [
      {
        title: 'Hot Deals Shrimp pizza',
        kcal: 475,
        detail: 'Shrimp, mushroom, cheese, tomato',
        price: '12.00',
        oldPrice: '20.00',
      },
      {
        title: 'Hot Deals Pinnacle pizza',
        kcal: 500,
        detail: 'Luna’s howl, hush, delirium, revoker',
        price: '99.00',
        oldPrice: '20.00',
      },
      {
        title: 'Hot Deals House Stoke Pizza ',
        kcal: 500,
        detail: 'Pig, pog, pet, pird',
        price: '15.00',
        oldPrice: '20.00',
      },
    ],
  },
];

export const DATA = {BANNERS, POPULAR_EAT, CATEGORIES, CUISINES, MENU};
