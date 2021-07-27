const cards = {
  emotions: [
    {
      name: 'angry',
      nameLT: 'piktas',
      category: 'emotions',
    },
    {
      name: 'sad',
      nameLT: 'liūdnas',
      category: 'emotions',
    },
    {
      name: 'scared',
      nameLT: 'išsigandęs',
      category: 'emotions',
    },
    {
      name: 'surprised',
      nameLT: 'nustebęs',
      category: 'emotions',
    },
    {
      name: 'tired',
      nameLT: 'pavargęs',
      category: 'emotions',
    },
    {
      name: 'happy',
      nameLT: 'laimingas',
      category: 'emotions',
    },
    {
      name: 'embarrassed',
      nameLT: 'susigėdęs',
      category: 'emotions',
    },
    {
      name: 'curious',
      nameLT: 'smalsus',
      category: 'emotions',
    },
  ],
  clothes: [
    {
      name: 'blouse',
      nameLT: 'marškinėliai',
      category: 'clothes',
    },
    {
      name: 'boot',
      nameLT: 'batas',
      category: 'clothes',
    },
    {
      name: 'coat',
      nameLT: 'paltas',
      category: 'clothes',
    },
    {
      name: 'dress',
      nameLT: 'suknelė',
      category: 'clothes',
    },
    {
      name: 'pants',
      nameLT: 'kelnės',
      category: 'clothes',
    },
    {
      name: 'shirt',
      nameLT: 'marškiniai',
      category: 'clothes',
    },
    {
      name: 'skirt',
      nameLT: 'sijonas',
      category: 'clothes',
    },
    {
      name: 'shoe',
      nameLT: 'batelis',
      category: 'clothes',
    },
  ],
  animals: [
    {
      name: 'bird',
      nameLT: 'paukštis',
      category: 'animals',
    },
    {
      name: 'cat',
      nameLT: 'katė',
      category: 'animals',
    },
    {
      name: 'chick',
      nameLT: 'viščiukas',
      category: 'animals',
    },
    {
      name: 'chicken',
      nameLT: 'višta',
      category: 'animals',
    },
    {
      name: 'dog',
      nameLT: 'šuo',
      category: 'animals',
    },
    {
      name: 'dolphin',
      nameLT: 'delfinas',
      category: 'animals',
    },
    {
      name: 'fish',
      nameLT: 'žuvis',
      category: 'animals',
    },
    {
      name: 'frog',
      nameLT: 'varlė',
      category: 'animals',
    },
  ],
  animals2: [
    {
      name: 'giraffe',
      nameLT: 'žirafa',
      category: 'animals2',
    },
    {
      name: 'horse',
      nameLT: 'arklys',
      category: 'animals2',
    },
    {
      name: 'lion',
      nameLT: 'liūtas',
      category: 'animals2',
    },
    {
      name: 'mouse',
      nameLT: 'pelė',
      category: 'animals2',
    },
    {
      name: 'pig',
      nameLT: 'kiaulė',
      category: 'animals2',
    },
    {
      name: 'rabbit',
      nameLT: 'triušis',
      category: 'animals2',
    },
    {
      name: 'sheep',
      nameLT: 'avis',
      category: 'animals2',
    },
    {
      name: 'turtle',
      nameLT: 'vėžlys',
      category: 'animals2',
    },
  ],
  action1: [
    {
      name: 'cry',
      nameLT: 'verkti',
      category: 'action1',
    },
    {
      name: 'dance',
      nameLT: 'šokti',
      category: 'action1',
    },
    {
      name: 'dive',
      nameLT: 'nerti',
      category: 'action1',
    },
    {
      name: 'draw',
      nameLT: 'piešti',
      category: 'action1',
    },
    {
      name: 'fly',
      nameLT: 'skristi',
      category: 'action1',
    },
    {
      name: 'hug',
      nameLT: 'apkabinti',
      category: 'action1',
    },
    {
      name: 'jump',
      nameLT: 'šokti',
      category: 'action1',
    },
    {
      name: 'open',
      nameLT: 'atidaryti',
      category: 'action1',
    },
  ],
  action2: [
    {
      name: 'play',
      nameLT: 'žaisti',
      category: 'action2',
    },
    {
      name: 'point',
      nameLT: 'rodyti',
      category: 'action2',
    },
    {
      name: 'ride',
      nameLT: 'jodinėti',
      category: 'action2',
    },
    {
      name: 'run',
      nameLT: 'bėgti',
      category: 'action2',
    },
    {
      name: 'skip',
      nameLT: 'šokinėti',
      category: 'action2',
    },
    {
      name: 'swim',
      nameLT: 'plaukti',
      category: 'action2',
    },
    {
      name: 'sing',
      nameLT: 'dainuoti',
      category: 'action2',
    },
    {
      name: 'laugh',
      nameLT: 'juoktis',
      category: 'action2',
    },
  ],
  fruit: [
    {
      name: 'banana',
      nameLT: 'bananas',
      category: 'fruit',
    },
    {
      name: 'peach',
      nameLT: 'persikas',
      category: 'fruit',
    },
    {
      name: 'apple',
      nameLT: 'obuolys',
      category: 'fruit',
    },
    {
      name: 'grape',
      nameLT: 'vynuogė',
      category: 'fruit',
    },
    {
      name: 'strawberry',
      nameLT: 'braškė',
      category: 'fruit',
    },
    {
      name: 'cherry',
      nameLT: 'vyšnia',
      category: 'fruit',
    },
    {
      name: 'watermelon',
      nameLT: 'arbūzas',
      category: 'fruit',
    },
    {
      name: 'pineapple',
      nameLT: 'ananasas',
      category: 'fruit',
    },
  ],
  vegetables: [
    {
      name: 'carrot',
      nameLT: 'morka',
      category: 'vegetables',
    },
    {
      name: 'cucumber',
      nameLT: 'agurkas',
      category: 'vegetables',
    },
    {
      name: 'onion',
      nameLT: 'svogūnas',
      category: 'vegetables',
    },
    {
      name: 'broccoli',
      nameLT: 'brokolis',
      category: 'vegetables',
    },
    {
      name: 'lettuce',
      nameLT: 'salota',
      category: 'vegetables',
    },
    {
      name: 'potato',
      nameLT: 'bulvė',
      category: 'vegetables',
    },
    {
      name: 'mushroom',
      nameLT: 'grybas',
      category: 'vegetables',
    },
    {
      name: 'tomato',
      nameLT: 'pomidoras',
      category: 'vegetables',
    },
  ],
};

const getAllCards = () => {
  const result = [];
  const keys = Object.keys(cards);
  keys.map((key) => {
    Object.keys(cards[key]).map((childKey) => {
      result.push(cards[key][childKey]);
      return result;
    });
    return result;
  });
  return result;
};

const getAllCategories = () => Object.keys(cards);

const getAllCardNames = () => getAllCards(cards).map((item) => item.name);

const getCardsByCategory = (category) => cards[category];
const getData = () => cards;

module.exports = {
  getData,
  getAllCards,
  getAllCategories,
  getAllCardNames,
  getCardsByCategory,
};
