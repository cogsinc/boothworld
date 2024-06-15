window.onload = choosePic;
var homePic = new Array(
  "/404/489e11312ab9654a8077d298a374499a.gif",
  "/404/7f1213739d38db35f672f794604134f6.gif",
  "/404/195233-2789878732.gif",
  "/404/b6e64d9d-3763850356.gif"
);
function choosePic() {
  var randomNum = Math.floor(Math.random() * homePic.length);
  document.getElementById("randomanimegirl").src = homePic[randomNum];
}