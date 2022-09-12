# Java

I don't particularly find this language interesting, too much boilerplate and too verbose for my taste.

## Keywords
```
abstract assert boolean break byte case
catch char class const continue default
do double else enum exports extends
final finally float for goto if
implements import instanceof int interface long
module native new non-sealed open opens
package permits private protected provides public
record requires return sealed short static
strictfp super switch synchronized this throw
throws to transient transitive try uses var
void volatile while with yield _
```
Reserved : `true`, `false`, `null`.

## Datatypes 

```
boolean Represents true/false values
byte 8-bit integer
char Character
double Double-precision floating point
float Single-precision floating point
int Integer
long Long integer
short Short integer
```

Constants are declared with the `final` keyword.
```java
final float slew_rate = 0.05;
```

Escapes
```text
\t <tab>
\\  \
\' '
\? ?
\r carriage return
\n new line
\" double quote

```


## Boilerplate

```java
// Filename: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Outputting 

```java
System.out.println("<text>");
```

# Taking Input 

Single Char
```java
var = (char) System.in.read();
```

Line 
```java
import java.util.Scanner; //import scanner class

// create an object of Scanner class
Scanner input = new Scanner(System.in);

// take input from the user
String varName = input.nextLine();
```

## Type casting

```java
double x = 165.48
int var_name = (int)x;
```

## Conditional 

If:
```java
if (condition) {
// block of code to be executed if the condition is true
}
```
```java
if (condition) {
// If condition is True then this block will get executed
} else {
// If condition is False then this block will get executed
}
```
```java
if (condition1) {
// Codes
}
else if(condition2) {
// Codes
}
else if (condition3) {
// Codes
}
else {
// Codes
}
```
```java
variable = (condition) ? expressionTrue : expressionFalse;
```

Switch:

```java
switch(expression) {
case a:
// code block
break;
case b:
// code block
break;
default:
// code block
}
```

## Loops

```java
while (condition) {
// code block
}
```

```java
for (initialization; termination; increment) {
// statement(s)
}
```

```java
for(dataType item : array) {
...
}
```

```java
do {
// body of loop
} while(textExpression)
```

`break;` inside the loop is used to terminate the loop

`continue;` skips the rest of the current iteration of the loop and returns to the starting point of the loop

## Arrays

Declaration
```java
String[] var_name;
```
Declaration with Initialization
```java
String[] var_name = {"Harry", "Rohan", "Aakash"};
```

Accessig an element
```java
System.out.println(var_name[index]);
```

Setting and element
```java
String[] var_name = {"Harry", "Rohan", "Aakash"};
var_name[2] = "Shubham";
```

Length of an Array
```java
System.out.println(var_name.length);
```

Iterating over an array
```java
String[] var_name = {"Harry", "Rohan", "Aakash"};
for (int i = 0; i < var_name.length; i++) {
System.out.println(var_name[i]);
}
```

2D arrays
```java
// Creating a 2x3 array (two rows, three columns) 
int[2][3] matrix = new int[2][3]; 
matrix[0][0] = 10; 
// Shortcut 
int[2][3] matrix = { 
{ 1, 2, 3 }, 
{ 4, 5, 6 } 
};
```