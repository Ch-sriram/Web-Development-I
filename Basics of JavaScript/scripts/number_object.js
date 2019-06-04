var br = '<br/>';

// Properties of Number Object:
document.write("Number.MAX_VALUE = " + Number.MAX_VALUE + br);
document.write("Number.MIN_VALUE = " + Number.MIN_VALUE + br);
document.write("Value of NaN (Not a Number) is " + Number.NaN + br);
document.write("Postive Infinity in JS is represented as " + Number.POSITIVE_INFINITY + br);
document.write("Negative Infinity in JS is represented as " + Number.NEGATIVE_INFINITY + br);

// Useful functions in Number Object:
document.write("isNaN(2/0) is " + isNaN(2/0) + ", because 2/0 is Not a Number" + br);
var price = 4432;
str_price = price.toString();
document.write("price is " + price + br);
document.write("str_price is " + str_price);
document.write(". NOTE: Here, price is a Number type & str_price is a String type");
