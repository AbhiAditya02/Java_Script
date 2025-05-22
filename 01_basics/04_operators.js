let value =3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello"
let str2 = " Abhi"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2+3);//123 as if 1st there is a string the all of the others are treated as string
console.log(1+2+"3");//33 
console.log(1+"2"+3);//123

console.log(true);//true
console.log(+true);//1

console.log(+""); //0

//postfix increment
let a = 100
b = a++;
console.log(a);//101
console.log(b);//100

//prefix increment
let c = 100
d = ++c;
console.log(c);//101
console.log(d);//101
  
// Operators :- operators are special symbols or keywords used to perform operations on operands (values and variables).

// Types of Operators :-

// Arithmetic Operators :- Used for basic mathematical operations
/*
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus (Remainder)
**	Exponentiation
++	Increment
--	Decrement
*/

//Assignment Operators :- Used to assign values to variables
/*
=	    x = 5	    Assign 5 to x
+=	    x += 5	    x = x + 5
-=	    x -= 5	    x = x - 5
*=	    x *= 5	    x = x * 5
/=	    x /= 5	    x = x / 5
%=	    x %= 5	    x = x % 5
**=	    x**= 2	    x = x** 2
*/

//omparison Operators :- Used to compare values
/*
==	    Equal value
===	    Equal value and type
!=	    Not equal value
!==	    Not equal value or type
>	    Greater than
<	    Less than
>=	    Greater than or equal to
<=	    Less than or equal to
*/

// Logical Operators :- Used to combine multiple conditions.
/*
&&      AND     T && T = T ; F && F = F ; T && F = F ; F && T = F
||      OR      T && T = T ; F && F = F ; T && F = T ; F && T = T
!       NOT     !true = false ; !false = true
*/

//Ternary Operator :- A shorthand for if-else
/*
condition_statement ? If_condition_True : If_condition_False
*/

// Bitwise Operators :- Operate on binary representations
/*
&       AND     1,1=1 ; 1,0=0 ; 0,1=0 ; 0,0=0  
|       OR      1,1=1 ; 1,0=1 ; 0,1=1 ; 0,0=0
!       NOT     !1 = false ; !0 = true
^       XOR     1,1=0 ; 1,0=1 ; 0,1=1 ; 0,0=0
>>      Right Shift 
                    {
                    Each right shift = divide by 2
                    20 >> 1 = 10
                    20 >> 2 = 5 
                    }
<<      Left Shift 
                    {
                    Each Left shift = multiply by 2
                    5 << 1 = 10
                    5 << 2 = 20 
                    }
*/
