function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

document.write('<img src="/Index/BGIMGs/' + getRandomInt(1, 92) + '.jpg" width="900" height="553">')