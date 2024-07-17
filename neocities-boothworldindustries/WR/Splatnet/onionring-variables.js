// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (Ã¨â€™Å“) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://boothworldindustries.neocities.org/',
'https://moonview.neocities.org/',
'https://blagi.neocities.org',
'https://bechnokid.neocities.org/home',
'https://angelnetcast.neocities.org/',
'https://ophanimkei.com/',
'https://lovelyqats.neocities.org/',
'https://magolor.neocities.org/',
'https://rh0mbus0fruin.neocities.org',
'https://splattacks.neocities.org/',
'https://www.cinnamuff.space/',
'https://shiroganes.neocities.org/',
'https://thechillzone.neocities.org/',
'https://jojjo.neocities.org/',
'https://ydkj.neocities.org/',
'https://y2kstardust.neocities.org/spoon',
'https://arrothame.neocities.org',
'https://nenkaii.neocities.org/splatoon',
'https://grizzcobreakroom.neocities.org/',
'https://kelprot.neocities.org/',
'https://crtstatic.neocities.org/',
'https://dendrophalaen.neocities.org/shrines/splatoon',
'https://waltzqueen.neocities.org/media/games/splatoon',
'https://muddymorals.neocities.org/',
'https://captdedeyes.com/',
'https://catboo.neocities.org/'
];

//the name of the ring
var ringName = 'Splatnet';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'Splatnet';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://boothworldindustries.neocities.org/WR/Splatnet/home';

//should the widget include a random button?
var useRandom = false;