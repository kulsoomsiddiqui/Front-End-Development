// ................................chapter 21 - 25................................................................

// PART 01

// var first_name= prompt('Enter Your Fisrt Name');
// var second_name= prompt(' Enter Your Second Name');
// var full_name= first_name + second_name;

// document.write(' <h3>WELCOME TO OUR WEBSITE<h3> ' + full_name.toUpperCase());

// PART 02

// var fav_cell= prompt('Enter Your Favriout Cell Phone');
// a = fav_cell.length;
// document.write(' Your Fav Cell is: ' + fav_cell);
// document.write(' And Your String Lenght is: ' + a);


// PART 03
// var find_index= "pakistani";
// var find_index = find_index.indexOf("n");
// document.write('<p> String: Pakistani  <p>')
// document.write('<p> Your index of "n" is: <p>' + find_index);

//  PART 04

// var find_index= "Hello world";
// var find_index = find_index. lastIndexOf('l');
// document.write('<p> String: Hello world  <p>')
// document.write('<p> Your index of "l" is: <p>' + find_index);

// PART 05

// var find_index= "pakistani";
// var find_index = find_index.substring(3,4);
// document.write('<p> String: Pakistani  <p>')
// document.write('<p> Your 3rd index is: <p>' + find_index);

//  PART 06

// var first_name= prompt('Enter Your Fisrt Name');
// var second_name= prompt(' Enter Your Second Name');
// var full_name= first_name.concat(second_name ) ;

// document.write(' <h3>WELCOME TO OUR WEBSITE<h3> ' + full_name.toUpperCase());

// PART 07

// var city = "Hyderabad";
// var repalcement = city.replace("Hyder", "Islam");
// document.write('<p> Before Replacement <p>' + city);
// document.write('<p> After Replacement <p>' + repalcement);

// PART 08

// const city = "Ali and Sami are best friends. They play cricket and football together";
// const regex = /and/gi;

// var a=(city.replace(regex, '&'));
// document.write('<p> After Replacement <p>' + a);

// PART 09

// var string_number= "472";
// before_convert=typeof(string_number);
// document.write('<p>before convert value type <p>'+ before_convert);
// var integer = parseInt(string_number);
// after_convert=typeof(integer);
// document.write('<p>before convert value type <p>'+ after_convert);


//PART 10

// var small_latter= prompt('Enter Name');
// result=small_latter.toUpperCase();
// document.write('<p>After Capital<p>' + result);

//  PART 11

// var a =prompt('enter');
//     var sentence = a.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
// document.write('<p>Title Case <p>');

//  document.write(sentence.join(" "));

// PART 12

// var number= "35.36";
// document.write('<p>Before Dot remove <p>' + number );
// var answer = number.split('.').join("");
// document.write('<p>After Dot remove <p>' + answer );


// PART 13

// var a =prompt('enter');
// var regex = /^[A-Za-z0-9 ]+$/;
//         var isValid = regex.test(a);
//         if (!isValid) {
//             alert("Please Enter a Valid Username");
//         }

// PART 14

// var user_check = prompt('Welcome to ABC Bakery. What do you want to order?');
// var upper_case= user_check.toLowerCase();

//     var array = ['apple', 'banana', 'orange','berry'];
//     for(i=0;i<=array.length;i++)    
//      {
//          if (upper_case == array[i]) 

//     {
//        alert( user_check + ' is available at index ' + i + ' in our bakery ');
//          break;
//     } 
//     if(i==array.length) {
//        alert('We are sorry ' + user_check + ' is not available is our bakery ');
//     }
// }

// PART 15

// const password = prompt('Enter Your Password');
// const validation= /^[A-Za-z]\w{7,14}$/;

//     if(password.match(validation))
//     {
//         alert('Correct Password');   
//     }
//     else
//     { 
//     alert('Password can not start with number!')}
    
// PART 16

// var uni ="university of karachi";
// var res = uni.split("");
// var text="";
// var i;
// for ( i=0; i<=res.length; i++)
// {
// text+=res[i] + "<br>"
// }
// document.write(text);


// PART 17

// var userinput = prompt('Enter')
// var check = userinput.substr(-1)

// document.write('<p>Last Char is <p>' +'\n'+ check);

// PART 18

// str = "The quick brown fox jumps over the lazy dog";
// alert('there are ' + str.split('the').length);


// ................................chapter 26 - 30................................................................

// PART 01
// var number =prompt('Enter Your Number');
// document.write('<p>Your Num is <p>' + number);

// var roundoff = Math.round(number);
// document.write('<p>Your Round off is <p>' + roundoff);

// var floorval = Math.floor(number);
// document.write('<p>Your floor val is <p>' + floorval);

// var ceilval = Math.ceil(number);
// document.write('<p>Your ceil val is <p>' + ceilval);

// PART 02
// var number =prompt('Enter Your Number');
// document.write('<p>Your Num is <p>' + number);

// var roundoff = Math.round(number);
// document.write('<p>Your Round off is <p>' + roundoff);
// var floorval = Math.floor(number);
// document.write('<p>Your floor val is <p>' + floorval);
// var ceilval = Math.ceil(number);
// document.write('<p>Your ceil val is <p>' + ceilval);

// PART 03
// var number =prompt('Enter Your Number');
// var abs = Math.abs(number);
// document.write('<p>Your absolute val is <p>' + abs);

// PART 04
document.write('<p>Random Dice val is <p>' + (Math.floor(Math.random() * 7)));

// PART 05

// var a =(Math.floor(Math.random()*2)+1)
// if (a==2){
//   alert('Random coin value: head ' + a)
// }
// else{
// alert(' Random coin value: tail ' +a);
// }

// PART 06

// var a =(Math.floor((Math.random()* 100)+ 1))

// alert(a);

// PART 07

// PART 08
// var b = prompt('Enter your number');
// var snum =(Math.floor((Math.random()* 10)+ 1));
// if (snum==b){
//   alert('Mubarak ho tum ko bht')
// }
// else{
//  alert ('Better luck boi')
// }


// ................................chapter 31 - 34................................................................


// PART 01

// var a = Date();
// document.write('<p>Your Date is <p>' + a);

// PART 02

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// document.write("<p>The current month is <p>" + monthNames[d.getMonth()]);


// PART 03
// const monthNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuarday",
//   "Sunday"];
//   const d = new Date();
// var v= monthNames[d.getDay()];
// var a=v.substring(0,3);
// alert("Today is " + a);


// PART 04

// const monthNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuarday",
//   "Sunday"];
//   const d = new Date();
// var v= monthNames[d.getDay()];
// if (v==monthNames[5]){
//     alert("its fun day")
// }
// else if (v==monthNames[6]){
//     alert("its fun day")
// }

// PART 05

// var today = new Date();
// var date = today.getDate();
// if(date> 16)
// {
//     alert("Last days of the month")
// }
// else if(date< 16){
// alert("First fifteen days of the month")
// }

// PART 6

// var TotalMin = new Date();
// var min = TotalMin.getMinutes();
  
//    var a = 2.575e+7 * min;
//    console.log(a);

// PART 07

// var time = new Date();
// console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );

// if (time<12){
//   alert("It's AM")
// }

// else if(time>12){ 
// alert("It's PM")
// }

// PART 08

// alert(new Date(2020, 12, 0));

// PART 09

// var date0 = new Date(2015, 0, 0);
// var date1 = new Date(2015, 5, 18);

// var numberOfDays = Math.ceil((date1 - date0) / 8.64e7);

// alert(numberOfDays + " days have passed since 1st Ramadan, 2015 ");

// PART 10

// var date_now = new Date(2020, 0, 0);
// var date_future = new Date();


// var delta = Math.abs(date_future - date_now) / 1000;
// alert(delta + " seconds has passed since beginning of the year 2020 ");

// PART 12

// var today = new Date();
// var year =today.getFullYear();

// var pyear= year-100;
// // var p=date -100;
// alert("Current date is "+ today + "\n" + "100 years back it was " + pyear);

// PART 13

// var age =prompt('Enter your age');
// var today = new Date();
// var date = today.getFullYear();

// var p=date -age;
// alert("Your age is "+ age + "\n" + "Your birth year is " +p);
// ................................chapter 35 - 38................................................................


// PART 01

// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
// }

// console.log(tellTime());

// PART 02
//  var first_name = prompt('enter your first name ');

// var second_name = prompt('enter your second name ');

// greetings(first_name,second_name);
// function greetings (a,b){
//     document.write('<h2>Hello my dear<h2> ' + a, '\n' ,b)
// }


// PART 03


// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// function addNumbers(firstNumber, secondNumber) {
//     return (firstNumber + secondNumber);
// }
// alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' is ' + addNumbers(firstNumber, secondNumber));

// ===================================  Chapter 35-38  Task_4 ===================================

// function add(num1, num2) {
//     return num1 + num2;
// }
// function min(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function div(num1, num2) {
//     return num1 / num2;
// }
// function mod(num1, num2) {
//     return num1 % num2;
// }
// var firstNumber = prompt("Enter Your First Number");
// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// var operator = prompt("Enter Operator\n1-Addition\n2-Subtraction\n3-Multiplication\n4-Division\n5-Modulus");
// if (operator == 1) {
//     alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' : ' + add(firstNumber, secondNumber));
// }
// else if (operator == 2) {
//     alert('Subtraction of ' + firstNumber + ' and ' + secondNumber + ' : ' + min(firstNumber, secondNumber));
// }
// else if (operator == 3) {
//     alert('Multiplication of ' + firstNumber + ' and ' + secondNumber + ' : ' + mul(firstNumber, secondNumber));
// }
// else if (operator == 4) {
//     alert('Division of ' + firstNumber + ' and ' + secondNumber + ' : ' + div(firstNumber, secondNumber));
// }
// else if (operator == 5) {
//     alert('Modulus of ' + firstNumber + ' and ' + secondNumber + ' : ' + mod(firstNumber, secondNumber));
// }
// else {
//     alert('Wrong Operator!')
// }

// ===================================  Chapter 35-38  Task_5 ===================================

// var number = prompt("Enter a number to make its square");
// number = parseInt(number);
// function square(number) {
//     return number * number;
// }
// alert('Square of ' + number + ' is ' + square(number));

// ===================================  Chapter 35-38  Task_6 ===================================

// var number = prompt("Enter a number to make its factorial");
// number = parseInt(number);
// function factorial(number) {
//     var fact = 1;
//     for (var i = 1; i <= number; i++)
//         fact = fact * i;
//     return fact;
// }
// alert('Factorial of ' + number + ' is ' + factorial(number));

// ===================================  Chapter 35-38  Task_7 ===================================

// var startNumber = prompt("Enter a starting number");
// startNumber = parseInt(startNumber);
// var endNumber = prompt("Enter an ending number");
// endNumber = parseInt(endNumber);
// function counting(startNumber, endNumber) {
//     return;
// }
// document.write('Counting from ' + startNumber + ' to ' + endNumber + ' : <br>' + counting(startNumber, endNumber));

// document.write([...Array(5).keys()]);

// ===================================  Chapter 35-38  Task_8 ===================================

// var base = prompt('Enter base for calculating hypotenuse of triangle');
// var perpendicular = prompt('Enter perpendicular for calculating hypotenuse of triangle');
// var number = prompt('Enter a number for making its square');

// // Outer function for calculating hypotenuse of triangle
// function Hypotenuse(base, perpendicular) {
//     // Inner function for calculating sqaure of a number
//     function Square(number) {
//         return number * number;
//     }
//     alert('Square of ' + number + ' : ' + Square(number));

//     var hypotenuse = (base * base) + (perpendicular * perpendicular);
//     return Math.sqrt(hypotenuse);
// }
// alert('Hypotenuse of triangle: ' + Hypotenuse(base, perpendicular));

// ===================================  Chapter 35-38  Task_9 ===================================

// var width = 40;
// var height = 40;
// function areaRectangle(width, height) {
//     return width * height;
// }
// // i. Arguments as value
// alert('Area of Rectangle by using arguments as value : ' + areaRectangle(30, 30));
// // ii. Arguments as variables
// alert('Area of Rectangle by using arguments as variable : ' + areaRectangle(width, height));

// ===================================  Chapter 35-38  Task_10 ===================================

// var string = prompt('Enter a string to check whether its palidrome or not');
// function Palindrome(string) {
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }
// var reverseString = Palindrome(string);
// if (reverseString == string) {
//     alert('The given string : (' + string + ') is palindrome');
// } else {
//     alert('The given string : (' + string + ') is not palindrome');
// }

// ===================================  Chapter 35-38  Task_11 ===================================

// var str = prompt('Enter a string to convert into title case');
// function titleCase(str) {
//     var wordsArray = str.toLowerCase().split(/\s+/);
//     var upperCased = wordsArray.map(function (word) {
//         return word.charAt(0).toUpperCase() + word.substr(1);
//     });
//     return upperCased.join(" ");
// }
// alert('Your string after converted in title case: ' + titleCase(str))

// ===================================  Chapter 35-38  Task_12 ===================================

// const str = prompt('Enter a string to to check which word is the longest');
// const strArray = str.split(" ");
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//         return strB.length - strA.length;
//     });
// document.write('Original string: ' + str);
// document.write('<br>Largest word in a string: ' + sortedStrArray[0])

// ===================================  Chapter 35-38  Task_13 ===================================

// var str = prompt('Enter a string');
// var letter = prompt('Enter a letter to count the number of occurrence within the string');
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write('Sample arguments: ' + "'" + str + "'" + ',' + "'" + letter + "'")
// document.write('<br>Occurrence of ' + letter + ' : ' + char_count(str, letter));

// ===================================  Chapter 35-38  Task_14 ===================================

// var radius = prompt('Enter radius for calculating circumference and area of circle');
// function calcCircumference(radius) {
//     return 2 * 3.142 * radius;
// }
// alert('The circumference of circle at ' + radius + ' is ' + calcCircumference(radius))
// function calcArea(radius) {
//     return 3.142 * (radius * radius);
// }
// alert('The area of circle at ' + radius + ' is ' + calcArea(radius))

var userPass = prompt("Enter your password:");
console.log("Entered password:" + " " + userPass)
var letters = /^[0-9a-zA-Z]+$/;

if(userPass.match(letters))
{ 
    var checkNumber = userPass.charAt(0);
    if(checkNumber.match(/\d+/g))
    {
  alert("Password can not begin with a number");
  alert ('Please enter a valid password')
    }
    else if (userPass.length > 6) 
       { 
           alert("Your password length is valid");
      alert("Login Succesfully");
       }
       
    else {
       
           alert("Must contain atleast 6 characters");
           alert ('Please enter a valid password');
    }
    
}





