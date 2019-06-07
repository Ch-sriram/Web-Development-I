var br = "<br/>";
var c = "<code>", c_end = "</code>";

// The typeof Operator returns the type of its single operand
// Example:
var info1 = typeof(39941);
var info2 = typeof('88392');
var info3 = typeof(NaN);
var info4 = typeof(null);
var info5 = typeof(Object);
var num;
var info6 = typeof num;    // same as typeof(num);
var info7 = typeof(undefined);
var info8 = typeof String;

document.write(c + "var info1 = typeof(39941);" + br);
document.write("var info2 = typeof('88392');" + br);
document.write("var info3 = typeof(NaN);" + br);
document.write("var info4 = typeof(null);" + br);
document.write("var info5 = typeof(Object);" + br);
document.write("var num;" + br);
document.write("var info6 = typeof num;    // same as typeof(num);" + br);
document.write("var info7 = typeof(undefined);" + br);
document.write("var info8 = typeof String;" + c_end + br);
/////////////////////////////////////////
document.write("info1 = " + info1 + br);
document.write("info2 = " + info2 + br);
document.write("info3 = " + info3 + br);
document.write("info4 = " + info4 + br);
document.write("info5 = " + info5 + br);
document.write("info6 = " + info6 + br);
document.write("info7 = " + info7 + br);
document.write("info8 = " + info8 + br);
