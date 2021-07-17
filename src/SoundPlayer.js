function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

module.exports = { play };
