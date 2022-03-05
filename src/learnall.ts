/*DECLARE EXPLICITLY (we're telling what kind of types are ok xd)*/
/*EXPLICIT TYPES
let numbroMumbro: number;
numbroMumbro = 11;

let stringiMingi: string;
stringiMingi = 'cica';
*/

/*EXPLICIT ARRAYS
let stringAr: string[];
let numArr: number[];
*/

/*UNION TYPES
let mixedAr: (string | number)[];

mixedAr = ['cica', 1, 'lo', 2]

let mixedVari: string | number;

mixedVari = 'cica'

let uniObi: {
    name: string,
    age: number
}
uniObi = {
    name: "cica",
    age: 11
}
*/

/*ANY TYPE
let anyThing: any
anyThing = 'cica',
    anyThing = 23;

let anyAr: any[]
let anyObi: {
    name: any,
    age: any
}
*/

/*FUNCTION TYPE
let greet: Function;
greet = (a: number, b: number, c: number | string): number => {
    return a + b;
}
console.log(greet(5, 5));
*/

/*TYPE ALIAS
//type aliases is used for storing types in a "variable" that can be used anywhere in our code.
type objectWithName = { name: string, age: number };
let helloUser = (user: objectWithName) => {
    console.log(`hello ${user.name}`)
}
let sanyi = { name: 'sanyi', age: 18 }
*/

/*FUNCTION SIGNATURES
//a higher level of defining how the function should look like o.O
let heyho: (a:string,b:string) => string
heyho = (name,greeting) => {
    return `${name} says ${greeting}`
}
*/

/*DECLARE INITIAL VALUES
*/

/*DECLARING VARIABLES
let character = 'asd';
console.log(character);
//cannot change character's type to a number or anything else but string
*/

/*DECLARING FUNCTION TYPES
const circ = function (diameter:number) {
    return diameter * Math.PI
}
console.log(circ(15))
//only can be number
*/

/*DECLARING ARRAYS
let arrayString = ['ima stringo','metoo'];
arrayString.push('you can push here only STRINGS')

let arrayNumber = [1,2,3];
arrayNumber.push(5);
//you cannot push here strings

let arrayMixed = [1,'here you can push both','because you declared a mixed typed'];
arrayMixed.push('yupuyp');
arrayMixed.push(5);

let idkNow = []
idkNow.push('cica');
idkNow.push(55);
*/

/*DECLARING OBJECTS
let tsObi = {
    name:'im a string',
    age: 1
}
tsObi.name='maki'
console.log(tsObi)
*/

