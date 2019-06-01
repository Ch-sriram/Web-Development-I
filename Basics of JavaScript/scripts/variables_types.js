/* 5 Primitive Types:
    1. Number
    2. String
    3. Boolean
    4. Undefined
    5. Null
*/

// Undefined type:

var c;
document.write(" c = " + c);  // O/P: c = undefined

// Number type:

var n = 75;
document.write("<br/> n = " + n); // O/P: n = 75

var f = 75.2;
document.write("<br/> f = " + f); // O/P: f = 75.2

// We can even use Scientific Notation for Floating Point Numbers
// for example, 7.2e2 or 7.2E2 means 720.0

var e = 7.2e2;
document.write("<br/> e = " + e); // O/P: e = 720

e = 7.2E-2;
document.write("<br/> e = " + e); // O/P: e = 0.072

// String Type:
// Enclosed in either '' or "". Some String Literals like 
// ", ', \, etc are Escaped by Backslash (\)

var s = "You\'re the most \"insane\"\\\"crazy\" person I\'ve seen till now!"
document.write("<br/> s = " + s) 
// O/P: s = You're the most "insane"\"crazy" person I've seen till now!

// Boolean Type:
var mayday = false;
var birthday = true;
document.write("<br/> mayday = " + mayday); // O/P: mayday = false;
document.write("<br/> birthday = " + birthday); // O/P: birthday = true;

// Null Type:
var x = null;
document.write("<br/> x = " + x); // O/P: x = null