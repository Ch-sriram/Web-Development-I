var br = "<br/>";
var c = "<code>", c_end = "</code>";

// Sometimes, it is convenient to be able to create objects that represent
// a spcific date and time and then manipulate them.
// These capabilities are available in JS using the Date Object.
// Example:

// We create a Date Object using the new operator
var today = new Date(); //notice the use of Date() constructor here

// date and time properties of a Date object are in two forms
// 1. local time
// 2. UTC (Coordinated Universal Time) aka GMT (Greenwich Mean Time)
var dL = today.toLocaleString();
var dD = today.toLocaleDateString();
var dT = today.toLocaleTimeString();
var date = today.getDate();
var month = today.getMonth();
var day = today.getDay();
var year = today.getFullYear();
var time = today.getTime();
var mins = today.getMinutes();
var sec = today.getSeconds();
var ms = today.getMilliseconds();
document.write(c + "var today = new Date();" + br);
document.write("var dL = today.toLocaleString();" + br);
document.write("var dD = today.toLocaleDateString();" + br);
document.write("var dT = today.toLocaleTimeString();" + br);
document.write("var date = today.getDate();" + br);
document.write("var month = today.getMonth();" + br);
document.write("var day = today.getDay();" + br);
document.write("var year = today.getFullYear();" + br);
document.write("var time = today.getTime();" + br);
document.write("var mins = today.getMinutes();" + br);
document.write("var sec = today.getSeconds();" + br);
document.write("var ms = today.getMilliseconds();" + c_end + br);
///////////////////////////////////////////////////////////////
document.write("today = " + today + br);
document.write("dL = " + dL + br);
document.write("dD = " + dD + br);
document.write("dT = " + dT + br);
document.write("date = " + date + br);
document.write("month = " + month + br);
document.write("day = " + day + br);
document.write("year = " + year + br);
document.write("time = " + time + br);
document.write("mins = " + mins + br);
document.write("sec = " + sec + br);
document.write("ms = " + ms + br);



