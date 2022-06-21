var num1 =window.prompt('Enter your number here');
var operations =window.prompt('Enter your arithmetic symbol here');
var num2 = window.prompt('Enter another number here');
var result;
num1 =parseFloat(num1);
num2 = parseFloat(num2);

if (operations == '+' ){
result= document.write(num1 + num2);}
else if (operations == '-' ){
result= document.write(num1 - num2);}
else if (operations == '*' ){
result= document.write(num1 * num2);}
else if (operations == '/' ){
result= document.write(num1 / num2);}
else{
    result = document.write ('arithmetic error!');}