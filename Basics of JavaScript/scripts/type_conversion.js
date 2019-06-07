/* Implicit Type Conversions */

var br = "<br/>";

// We use the + operator with a String type & a Number type
// The JS interpreter does coercion (implicit type conversion)
// based on the context, i.e.,

var str = "August " + 1977;
document.write("\"August \" + 1977 is \"" + str +"\"" + br);

// In another fashion, if the String type itself is a Number like
// say '3', then when it is multiplied to a Number type, our output would
// be a mulitplied number of Number type, i.e.,

var num = '3' * 7;
document.write("'3' * 7 = " + num + br);

// Now, if we had a String that doesn't purely contain and a number with
// a Number type value, then their multiplication would produce NaN, i.e.,

var nonsense = 'abc123' * 90;
document.write("'abc123' * 90 = " + nonsense + br);

/* ------------------------------------------------------------------------------------ */

/* Explicit Type Conversions */

// We can convert a Number type value into a String type by using
// String type's constructor as follows:


var c = '<code>';
var c_end = '</code>';

var str1 = String(9443);
document.write(c + "var str1 = String(9443);" + c_end + br);
document.write("str1 = " + str1 + br + br);

// We can also use toString() method to convert a number value to a String Type
// The advantage of using a toString() method is that, we can also 
// specify the base to which we want our string to convert in. Example:
var num1 = 9;
var str_value = num1.toString();    // Default base is 10, i.e., Decimal
var str_value_binary = num1.toString(2);    // Base 2 is to convert the number into its Binary equivalent.

document.write(c + "var num1 = 9;" + br);
document.write("var str_value = num1.toString();" + br);
document.write("var str_value_binary = num1.toString(2);" + c_end + br);
document.write("str_value = " + str_value + br);
document.write("str_value_binary = " + str_value_binary + br + br);

// We use the Number() constructor to convert a String type to 
// a Number type.

var aString = '1099230';
var num2 = Number(aString); // Usage of Number() constructor
document.write(c + "var aString = '1099230';" + br);
document.write("var num2 = Number(aString);" + c_end + br);
document.write("num2 = " + num2 + br);


// The String should contain only numeric characters.
// If the string contains any other character other than numeric characters,
// then, we will get the following output:

var str3 = '100,000';
var num3 = str3 - 0;
document.write(c + "var str3 = '100,000';" + br);
document.write("var num3 = str3 - 0; //This is also another way to convert a String type into a Number type" + c_end + br);
document.write("num3 = " + num3 + br);

// The Output is NaN because str3 has a comma(,)

// To make sure at least one number gets converted, 
// we use parseInt() & parseFloat(). But the string passed to it should
// start with a numeric character, or else, the output of these methods
// will also be a NaN. After a non-numeric character occurs, the 
// parseInt() & the parseFloat() methods stop parsing any further characters
// and convert only till the last numeric character from the start, till its end
// Example:

var str4 = '100,000';
var num4 = parseInt(str4);
document.write(br + c + "var str4 = '100,000';" + br);
document.write("var num4 = parseInt(str4);" + c_end + br);
document.write("num4 = " + num4 + br);




