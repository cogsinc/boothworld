calendar = new Date();
 day = calendar.getDay();
 month = calendar.getMonth();
 date = calendar.getDate();
 year = calendar.getYear();
 if (year < 1000)
 year+=1900
 cent = parseInt(year/100);
 g = year % 19;
 k = parseInt((cent - 17)/25);
 i = (cent - parseInt(cent/4) - parseInt((cent - k)/3) + 19*g + 15) % 30;
 i = i - parseInt(i/28)*(1 - parseInt(i/28)*parseInt(29/(i+1))*parseInt((21-g)/11));
 j = (year + parseInt(year/4) + i + 2 - cent + parseInt(cent/4)) % 7;
 l = i - j;
 emonth = 3 + parseInt((l + 40)/44);
 edate = l + 28 - 31*parseInt((emonth/4));
 emonth--;
 var dayname = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
 var monthname = 
 new Array ("January","February","March","April","May","June","July","August","September","October","November","December" );
 

// Days
//Monday
if ((day == 1)) { 
var arrayImg = new Array();
arrayImg[0] = "monday.gif";
arrayImg[1] = "monday2.gif";
arrayImg[2] = "monday3.gif";
arrayImg[3] = "monday4.gif";
arrayImg[4] = "monday6.gif";
arrayImg[5] = "monday7.gif";
arrayImg[6] = "monday8.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #a3302c;"></center>';
    document.write(imgStr); document.close();
}
   
 textArray = ("Mondays child is fair of face.");
 document.write('<center><p style="background-color: #a3302c; color: #edabaa">'+ textArray +'</p></center>');
}


//Tuesday
if ((day == 2)) { 
var arrayImg = new Array();
arrayImg[0] = "tuesday.gif";
arrayImg[1] = "wonderfulday2.gif";
arrayImg[2] = "magicalweek.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #a36f2c;"></center>';
    document.write(imgStr); document.close();
}
   
 textArray = ("Tuesdays child is full of grace.");
 document.write('<center><p style="background-color: #a36f2c; color: #edd0aa">'+ textArray +'</p></center>');
}


//Wednesday
if ((day == 3)) { 
var arrayImg = new Array();
arrayImg[0] = "wednesday.gif";
arrayImg[1] = "greatday.gif";
arrayImg[2] = "greatweek3.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #a3a32c;"></center>';
    document.write(imgStr); document.close();
}
   
 textArray = ("Wednesdays child is full of woe.");
 document.write('<center><p style="background-color: #a3a32c; color: #ecedaa">'+ textArray +'</p></center>');
}


//Thursday
if ((day == 4)) { 
var arrayImg = new Array();
arrayImg[0] = "thursday.gif";
arrayImg[1] = "thursday2.gif";
arrayImg[2] = "thursday3.gif";
arrayImg[3] = "magicalday.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #35a32c;"></center>';
    document.write(imgStr); document.close();
}
   
 textArray = ("Thursdays child is far to go.");
 document.write('<center><p style="background-color: #35a32c; color: #c6edaa">'+ textArray +'</p></center>');
}


//Friday
if ((day == 5)) { 
var arrayImg = new Array();
arrayImg[0] = "friday.gif";
arrayImg[1] = "friday2.gif";
arrayImg[2] = "weekend7.gif";
arrayImg[3] = "weekend.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #2c32a3;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Fridays child is loving and giving.");
 document.write('<center><p style="background-color: #2c32a3; color: #aac5ed">'+ textArray +'</p></center>');
}


//Saturday
if ((day == 6)) { 
var arrayImg = new Array();
arrayImg[0] = "saturday.gif";
arrayImg[1] = "saturday2.gif";
arrayImg[2] = "saturday3.gif";
arrayImg[3] = "greatweekend.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #872ca3;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Saturdays child works hard for a living.");
 document.write('<center><p style="background-color: #872ca3; color: #edaae9">'+ textArray +'</p></center>');
}


//Sunday
if ((day == 0)) { 
var arrayImg = new Array();
arrayImg[0] = "sunday.gif";
arrayImg[1] = "weekend3.gif";
arrayImg[2] = "wonderfulday.gif";
arrayImg[3] = "greatweek2.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #a32c71;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("But the child that is born on Sabbath<br>day, is bonny and blithe, good and gay.");
 document.write('<center><p style="background-color: #a32c71; color: #edaac4">'+ textArray +'</p></center>');
}



 // January - 0
 
 
 
 // February - 1
if ((month == 1) && (date == 2)) { 
var arrayImg = new Array();
arrayImg[0] = "groundhog.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #681909;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Its Groundhog Day!<br>...Again.");
 document.write('<center><p style="background-color: #f9d68e; color: #681909">'+ textArray +'</p></center>');
}
 
if ((month == 1) && (date == 14)) { 
var arrayImg = new Array();
arrayImg[0] = "val2.gif";
arrayImg[1] = "val3.gif";
arrayImg[2] = "val4.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #9b1540;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Have a lovely Valentines Day to<br>all hopeless and ful romantics.");
 document.write('<center><p style="background-color: #ed97b2; color: #9b1540">'+ textArray +'</p></center>');
}
 
 
 
 // March - 2
 if ((month == 2) && (date == 17)) { 
var arrayImg = new Array();
arrayImg[0] = "patricksday2.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #0c6d12;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Have a lucky St. Patricks Day; But<br>don't spend all your money on the lottery!");
 document.write('<center><p style="background-color: #0c6d12; color: #edfc4e">'+ textArray +'</p></center>');
}

 
 if ((month == 2) && (date == 25)) { 
var arrayImg = new Array();
arrayImg[0] = "648860mfg6rv7wvu.png";
arrayImg[1] = "BEN1.png";
arrayImg[2] = "BEN2.png";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #870626;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Our flower blooms endlessly,<br>my dear bellringer.");
 document.write('<center><p style="background-color: #e8b425; color: #870626">'+ textArray +'</p></center>');
}


//MARDI GRAS 2025- UPDATE NEXT YEAR!
  if ((month == 2) && (date == 4)) { 
var arrayImg = new Array();
arrayImg[0] = "mardi1.gif";
arrayImg[1] = "mardi2.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #670189;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("A fulfilling Mardi Gras to you all!");
 document.write('<center><p style="background-color: #094200; color: #f4ec46">'+ textArray +'</p></center>');
}


 
 // April - 3
if ((month == 3) && (date == 1)) { 
var arrayImg = new Array();
arrayImg[0] = "aprilfools.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #f4f464;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Happy April Fools! If a faceless cat<br>were to approach you,<br>what would you draw on her?");
 document.write('<center><p style="background-color: #9acdd3; color: #bc126d">'+ textArray +'</p></center>');
}
 

if ((month == 3) && (date == 22)) { 
var arrayImg = new Array();
arrayImg[0] = "earthday.jpg";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #0c4902;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Have a joyful Earth Day; Install Linux on old hardware to prevent ewaste!");
 document.write('<center><p style="background-color: #0c4902; color: #a4b8fc">'+ textArray +'</p></center>');
}
 
 
 
 // May - 4
 if ((month == 4) && (date == 5)) { 
var arrayImg = new Array();
arrayImg[0] = "cinco.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #960b04;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Have a victorious Cinco de Mayo!");
 document.write('<center><p style="background-color: #107707; color: #dbdbdb">'+ textArray +'</p></center>');
}


 
 // June - 5


 
 // July - 6
 if ((month == 6) && (date == 27)) { 
var arrayImg = new Array();
arrayImg[0] = "birthday3.jpg";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #c6156b;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("A delightful scent fills the air, and candles<br>are lit. Happy birthday, sweetest Pinkie.");
 document.write('<center><p style="background-color: #c6156b; color: #fcbdd4">'+ textArray +'</p></center>');
}
 
 
 
 // August - 7
 if ((month == 7) && (date == 20)) { 
var arrayImg = new Array();
arrayImg[0] = "birthday2.gif";
arrayImg[1] = "birthday5.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #eac231;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("The bell rings on the dawn of this day.<br>Happy birthday, my beloved Benjamin.");
 document.write('<center><p style="background-color: #eac231; color: #041451">'+ textArray +'</p></center>');
}


 
 // September - 8
 
 
 
 // October - 9
  if ((month == 9) && (date == 31)) { 
var arrayImg = new Array();
arrayImg[0] = "halloween6.jpg";
arrayImg[1] = "happyhalloween.gif";
arrayImg[2] = "happyhalloween2.gif";
arrayImg[3] = "happyhalloween3.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #5e028c;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Trick or treat, have a spooky Halloween!");
 document.write('<center><p style="background-color: #5e028c; color: #ea8007">'+ textArray +'</p></center>');
}
 
 
 
 // November - 10
 
 
 
 // December - 11
  if ((month == 11) && (date == 25)) { 
var arrayImg = new Array();
arrayImg[0] = "christmas.gif";
arrayImg[1] = "christmas3.gif";
arrayImg[2] = "christmas4.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #870000;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Happy holidays, from Boothworld Industries!");
 document.write('<center><p style="background-color: #870000; color: #4b8c38">'+ textArray +'</p></center>');
}


  if ((month == 11) && (date == 31)) { 
var arrayImg = new Array();
arrayImg[0] = "newyear.gif";
arrayImg[1] = "newyear2.gif";
arrayImg[2] = "newyear3.gif";

getRandomImage(arrayImg, "");
function getRandomImage(imgAr, path) {
    path = path || '/Index/Calendar/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<center><img src="' + path + img + '" width="170" style="border: 3px inset #090642;"></center>';
    document.write(imgStr); document.close();
}

 textArray = ("Until next year~ Thank you for<br>visiting Boothworld Industries.");
 document.write('<center><p style="background-color: #090642; color: #a3a299">'+ textArray +'</p></center>');
}