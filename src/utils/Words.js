const cards = {
  emotions: [
    {
      name: 'angry',
      translation: 'piktas',
      category: 'emotions',
    },
    {
      name: 'sad',
      translation: 'liūdnas',
      category: 'emotions',
    },
    {
      name: 'scared',
      translation: 'išsigandęs',
      category: 'emotions',
    },
    {
      name: 'surprised',
      translation: 'nustebęs',
      category: 'emotions',
    },
    {
      name: 'tired',
      translation: 'pavargęs',
      category: 'emotions',
    },
    {
      name: 'happy',
      translation: 'laimingas',
      category: 'emotions',
    },
    {
      name: 'embarrassed',
      translation: 'susigėdęs',
      category: 'emotions',
    },
    {
      name: 'curious',
      translation: 'smalsus',
      category: 'emotions',
    },
  ],
  clothes: [
    {
      name: 'blouse',
      translation: 'marškinėliai',
      category: 'clothes',
    },
    {
      name: 'boot',
      translation: 'batas',
      category: 'clothes',
    },
    {
      name: 'coat',
      translation: 'paltas',
      category: 'clothes',
    },
    {
      name: 'dress',
      translation: 'suknelė',
      category: 'clothes',
    },
    {
      name: 'pants',
      translation: 'kelnės',
      category: 'clothes',
    },
    {
      name: 'shirt',
      translation: 'marškiniai',
      category: 'clothes',
    },
    {
      name: 'skirt',
      translation: 'sijonas',
      category: 'clothes',
    },
    {
      name: 'shoe',
      translation: 'batelis',
      category: 'clothes',
    },
  ],
  animals: [
    {
      name: 'bird',
      translation: 'paukštis',
      category: 'animals',
    },
    {
      name: 'cat',
      translation: 'katė',
      category: 'animals',
    },
    {
      name: 'chick',
      translation: 'viščiukas',
      category: 'animals',
    },
    {
      name: 'chicken',
      translation: 'višta',
      category: 'animals',
    },
    {
      name: 'dog',
      translation: 'šuo',
      category: 'animals',
    },
    {
      name: 'dolphin',
      translation: 'delfinas',
      category: 'animals',
    },
    {
      name: 'fish',
      translation: 'žuvis',
      category: 'animals',
    },
    {
      name: 'frog',
      translation: 'varlė',
      category: 'animals',
    },
  ],
  animals2: [
    {
      name: 'giraffe',
      translation: 'žirafa',
      category: 'animals2',
    },
    {
      name: 'horse',
      translation: 'arklys',
      category: 'animals2',
    },
    {
      name: 'lion',
      translation: 'liūtas',
      category: 'animals2',
    },
    {
      name: 'mouse',
      translation: 'pelė',
      category: 'animals2',
    },
    {
      name: 'pig',
      translation: 'kiaulė',
      category: 'animals2',
    },
    {
      name: 'rabbit',
      translation: 'triušis',
      category: 'animals2',
    },
    {
      name: 'sheep',
      translation: 'avis',
      category: 'animals2',
    },
    {
      name: 'turtle',
      translation: 'vėžlys',
      category: 'animals2',
    },
  ],
  action1: [
    {
      name: 'cry',
      translation: 'verkti',
      category: 'action1',
    },
    {
      name: 'dance',
      translation: 'šokti',
      category: 'action1',
    },
    {
      name: 'dive',
      translation: 'nerti',
      category: 'action1',
    },
    {
      name: 'draw',
      translation: 'piešti',
      category: 'action1',
    },
    {
      name: 'fly',
      translation: 'skristi',
      category: 'action1',
    },
    {
      name: 'hug',
      translation: 'apkabinti',
      category: 'action1',
    },
    {
      name: 'jump',
      translation: 'šokti',
      category: 'action1',
    },
    {
      name: 'open',
      translation: 'atidaryti',
      category: 'action1',
    },
  ],
  action2: [
    {
      name: 'play',
      translation: 'žaisti',
      category: 'action2',
    },
    {
      name: 'point',
      translation: 'rodyti',
      category: 'action2',
    },
    {
      name: 'ride',
      translation: 'jodinėti',
      category: 'action2',
    },
    {
      name: 'run',
      translation: 'bėgti',
      category: 'action2',
    },
    {
      name: 'skip',
      translation: 'šokinėti',
      category: 'action2',
    },
    {
      name: 'swim',
      translation: 'plaukti',
      category: 'action2',
    },
    {
      name: 'sing',
      translation: 'dainuoti',
      category: 'action2',
    },
    {
      name: 'laugh',
      translation: 'juoktis',
      category: 'action2',
    },
  ],
  fruit: [
    {
      name: 'banana',
      translation: 'bananas',
      category: 'fruit',
    },
    {
      name: 'peach',
      translation: 'persikas',
      category: 'fruit',
    },
    {
      name: 'apple',
      translation: 'obuolys',
      category: 'fruit',
    },
    {
      name: 'grape',
      translation: 'vynuogė',
      category: 'fruit',
    },
    {
      name: 'strawberry',
      translation: 'braškė',
      category: 'fruit',
    },
    {
      name: 'cherry',
      translation: 'vyšnia',
      category: 'fruit',
    },
    {
      name: 'watermelon',
      translation: 'arbūzas',
      category: 'fruit',
    },
    {
      name: 'pineapple',
      translation: 'ananasas',
      category: 'fruit',
    },
  ],
  vegetables: [
    {
      name: 'carrot',
      translation: 'morka',
      category: 'vegetables',
    },
    {
      name: 'cucumber',
      translation: 'agurkas',
      category: 'vegetables',
    },
    {
      name: 'onion',
      translation: 'svogūnas',
      category: 'vegetables',
    },
    {
      name: 'broccoli',
      translation: 'brokolis',
      category: 'vegetables',
    },
    {
      name: 'lettuce',
      translation: 'salota',
      category: 'vegetables',
    },
    {
      name: 'potato',
      translation: 'bulvė',
      category: 'vegetables',
    },
    {
      name: 'mushroom',
      translation: 'grybas',
      category: 'vegetables',
    },
    {
      name: 'tomato',
      translation: 'pomidoras',
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

const getDataByName = (name) => getAllCards().find((card) => card.name === name);

module.exports = {
  getData,
  getDataByName,
  getAllCards,
  getAllCategories,
  getAllCardNames,
  getCardsByCategory,
};
