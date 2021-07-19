function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

const playRandom = (collection) => {
  console.log(collection);
  const item = collection[Math.floor(Math.random() * collection.length)].name;
  const audio = new Audio(`./assets/audio/${item}.mp3`);
  return audio.play();
};

module.exports = { play, playRandom };
