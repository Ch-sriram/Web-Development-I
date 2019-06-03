var a = 7
var expr1 = (++a) * 3;

document.write("When a = 7, (++a) * 3 = " + expr1); // O/P: 24

a--;
var expr2 = (a++) * 3;
document.write(" & (a++) * 3 = " + expr2); // O/P: 21

a = a * 10 - 4; 
document.write("<br/> a = a * 10 - 4; // makes a = " + a); // O/P: 76

// We have the usual +=, -=, &=, etc operators too, which can be used.