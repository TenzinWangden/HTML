/** 
 * truthy vs falsy
 */
// let x = 'a'; // truthy
// x = ''; //falsy
// x=[];//truthy due to object
// x=x.length;//falsy due to x length being (0)
// x={}; //truthy due to object
// let y; //falsy
// x=y; // falsy due to not defined

// x = Number("0"); // is this a strig of 0 => truthy? explicit casting will turn it into a number => fals
// x = Number("hello"); // falsy casting to number and passed invalid number string 
// x = Boolean("false"); // Boolean creates a Boolean based on the paramter's truthy or falsy state
// x = Boolean(""); // Boolean creates a Boolean based on the paramter's truthy or falsy state

// x = NaN; // falsy
// x = null; // null is a placeholder -- falsy 
// x = null == undefined; // loosely speaking they are 
// x = null === undefined; // strictly speaking these aren't the same
// x = -0; // falsy
// let t = typeof x;
console.log(`x is currently ${x} and is of type ${t}`);

if (x) {
    console.log("truthy");
} else {
    console.log("falsy");
}
console.log("good bye");

/**
 * Falsy values in JS are
 * ----------------------
 * - '' empty string
 * - 0
 * - false
 * - undefined
 * - null
 * - Boolean(of any falsy)
 * 
 * Truthy values
 * -------------
 * - [] empty array
 * - {} empty objects
 * - 'a' string with values
 * - 10 nonzero values
 * - Boolean(of any truthy)
 */