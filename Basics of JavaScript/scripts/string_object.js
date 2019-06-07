var br = "<br/>";
var c = "<code>";
var c_end = "</code>";

// String object has one very important property known
// as length, it used as follows:
var str = 'Arrow';
var len = str.length;
document.write(c + "var str = 'Arrow';" + br);
document.write("var len = str.length;" + c_end + br);
document.write("len = " + len + br + br + br);

// We can see that, str here is a primitive variable, but we
// treated it as if it were an object (referencing one of its properties)

// These are the String Methods:
var aString = 'ThIs !s $oM3 s₹īnG';
var charAt2 = aString.charAt(2);
var indexOf$ = aString.indexOf('$');
var substring24 = aString.substring(2,4);
var toLowerCase = aString.toLowerCase();
var toUpperCase = aString.toUpperCase();
document.write(c + "var aString = 'ThIs !s $oM3 s₹īnG';" + br);
document.write("var charAt2 = aStirng.charAt(2);" + br);
document.write("var indexOf$ = aString.indexOf('$');" + br);
document.write("var substring24 = aString.substring(2,4);" + br);
document.write("var toLowerCase = aString.toLowerCase();" + br);
document.write("var toUpperCase = aString.toUpperCase();" + c_end + br);
////////////////////////////////////////////////////////////////////
document.write("charAt2 = " + charAt2 + br);
document.write("indexOf$" + indexOf$ + br);
document.write("substring24 = " + substring24 + br);
document.write("toLowerCase = " + toLowerCase + br);
document.write("toUpperCase = " + toUpperCase + br + br);



