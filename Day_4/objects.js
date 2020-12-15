/* Any value in JS that is not a string, a number ,a symbol, or true false, null or udefined is an object.
even though strings, numbers and booleans are not objects they can behave like immutable objects. A property name may be any string, including the empty string, but no object may have two propertie with same name.

JS uses term 'own property' to refer to non-inherited properties.

In addition to name and value each property has three property attributes:
1. writable (whether the value of the property can be set)
2. enumerable (whether property name is returned by a for/in loop )
3. configurable (properties can be added or deleted)

/////////  Creating Objects  ////////
1. using new keyword
2. Object.create()

*/

/////--- 1.1 Object Literals ---/////
let empty ={};
let point = {x:0,y:0};
let p2 = {x:point.x , y: point.y+1};

/////--- 1.2 Objects with new ---/////
let o = new Object();
let a = new Array();
let d = new Date();
let r = new Map();