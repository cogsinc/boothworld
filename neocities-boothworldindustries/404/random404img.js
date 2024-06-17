window.onload = choosePic;
var homePic = new Array(
  "/404/mima1.gif",
  "/404/mima2.gif",
  "/404/mima3.gif",
  "/404/mima4.gif"
);
function choosePic() {
  var randomNum = Math.floor(Math.random() * homePic.length);
  document.getElementById("randomanimegirl").src = homePic[randomNum];
}