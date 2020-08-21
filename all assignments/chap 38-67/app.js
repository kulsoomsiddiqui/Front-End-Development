// // CHAPTER NUM 38-42......................................................................
// function power (a,b){
//   var answer =1;
//    for (var i=1; i<=b; i++){
//   answer= answer*a;
//   }
//         return answer;
// }
//  var user_num1 = prompt("enter first numbers");
//  var user_num2 = prompt("enter second numbers");
//  alert('Your answer is' (power(user_num1,user_num2)));
// // CHAPTER NUM 38-42......................................................................

//  function leapyears(year){
//    if( year % 100 === 0){ 
//      alert("Yes this is an leapyear")
//    } 
//    else if( year % 400 === 0){ 
//     alert("Yes this is an leapyear")
//   } 
//   else if( year % 4 === 0){ 
//     alert("Yes this is an leapyear")
//   } 
//   else{
//     alert("No this is not a leapyear")
//   }
//  }
//  var user = prompt("enter your year");
//  alert('Your answer is' (leapyears(user)));

//  // CHAPTER NUM 38-42......................................................................

//  function area (a,b,c){
// var s= a+b+c/2;
// return s;
//  }

//  function areas (v){
//   var S = (area(user_num1,user_num2,user3)((area(user_num1,user_num2,user3)−v) ((area(user_num1,user_num2,user3)−b))(S − c)
//  }
//  user_1=1;



//   // S(S − a)(S − b)(S − c)
//   // S = ( a + b + c ) / 2

// // CHAPTER NUM 38-42......................................................................

// function percentage( sub1,sub2,sub3){
//   var persen =Math.round(((sub1+sub2+sub3) * 100 )).toFixed(2);
//   return persen

// }
// function average(subj1,subj2,subj3){
//   var avg= subj1+subj2+subj3/3
//   return avg
// }
// function main(){
//   var user_sub1= prompt("Enter Your First Subject Number's");
//   var user_sub2= prompt("Enter Your First Subject Number's");
//   var user_sub3= prompt("Enter Your First Subject Number's");

// alert((percentage(user_sub1,user_sub2,user_sub3)));
// }
// main()

// // CHAPTER NUM 38-42......................................................................

// function index_off(string){
//  var array= string.split("");
// for(var i=0; i<=array.length; i++)
// {
//   if (array[i] == string)
//   {
//    alert("This is the index of the char :"+[i]);
//   }
// }

// }
// var ans= prompt('Enter You char')
// index_off(ans);


 // CHAPTER NUM 38-42......................................................................

//  function vowels(string){
//   var strings= string.split()
//   newstring = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

//   alert('The New Strinf is : '+newstring);
  
 
// }

// var vol = prompt('Enter Message')
//  vowels(vol);

// CHAPTER NUM 38-42......................................................................

// function findOccurrences() {
//   var str  = prompt("Please Enter Your Sentence")
//   var count = 0;
//   let haveSeenVowel = false;

//   for (const letter of str.toLowerCase()) {
//     switch (letter) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         {
//           if (haveSeenVowel) {
//             count++;
//             haveSeenVowel = false;
//           } else {
//             haveSeenVowel = true;
//           }
//           break;
//         }
//       default:
//         haveSeenVowel = false
//     }
//   }

//   return count
// }
// var found = findOccurrences();

// alert('Your Accurancy is : '+found+ ' Times');

// CHAPTER NUM 38-42......................................................................

// function conversions(km){
  
// var  m = km * 1000;
//    var cm = km * 1000 * 100;
//    var f = km * 3280.84;
//     var inch = km * 39370.08;
//     return [m, cm, f, inch];
// }

// var km = prompt("Enter Your Number In Kilograms")
// alert(('Your Number in Meters, CentiMeters, Feets & Inches are : '+ conversions(km)))

// CHAPTER NUM 38-42......................................................................

function overtime_cal(time){
  if(time >40){
    var overtimepay = time-40.00;
    overtimemoney=overtimepay * 12.00;
    return overtimemoney
  }
  else{
    alert("You have to work for more than 40 hours to get over time pay");
  }
}
var empolytime = prompt("Enter Your Employ Time");
alert('Your Employ Overtime Pay is : '+ overtime_cal(empolytime));

// CHAPTER NUM 33-48......................................................................

// function showlink(){
// alert("Good You showed The Alert Box" )
// }
// CHAPTER NUM 33-48......................................................................

// function showMesg(){
//   alert('Thanks For Liking our Cell Phones')
// }
// CHAPTER NUM 33-48......................................................................

// function deleteRow(r){
//   {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }   
// }    

// CHAPTER NUM 33-48......................................................................

function rollover(my_image)
{

    my_image.src = 'flower2.jpg';

}
  
  function mouseaway(my_image)
  {

      my_image.src = "flower1.jpg";

  }

// CHAPTER NUM 33-48......................................................................
var clicks = 0;
    function onClickincre() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    function onClickdecre() {
      clicks -= 1;
      document.getElementById("clicks").innerHTML = clicks;
  }
  
// CHAPTER NUM 49-52......................................................................
function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
  message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
  message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
  DispWin.document.write(message);
}
// CHAPTER NUM 49-52......................................................................
function readmore(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// CHAPTER NUM 49-52.......................................................................
function deleteRow(r){
  {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("MyTable").deleteRow(i);
}   
} 

