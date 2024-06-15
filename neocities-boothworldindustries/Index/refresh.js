// JavaScript Document
 
// Set up the text files to be used.
var theText = new Array() // do not change this
 
 
theText[0] = 'In the original Japanese versions of Animal Crossing: Gracie, Saharah and Blanca are boys.';
theText[1] = 'Detective Vertitys voice actor From "Crashbox", Maggie Baird, is Billie Ellishs mother.';
theText[2] = 'The Vocaloid "Big Al" was originally voiced by an Elvis impersonator. But was changed due to unknown reasons. His voice providers were swapped three times!';
 
// do not edit anything below this line
 
var j = 0
var p = theText.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = theText[i]
}
var whichText = Math.round(Math.random()*(p-1));
function showText(){
//This a wrapper for the text array it can be changed if need
document.write('<p class="thetext">'+theText[whichText]+'</p>');
}