var randomizer = [
    'https://boothworldindustries.neocities.org/WR/Splatnet/home',
    'https://boothworldindustries.neocities.org/Art/MainArt/art'
];

function randompage() {
var i = parseInt(Math.random() * randomizer.length);
location.href = randomizer[i];
}