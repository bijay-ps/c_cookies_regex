const str = "I have a fat cat in a hut who eat rat";
// const regex = new RegExp(/cat/); // One way
const regex = /cat/; // Second way

// test method returns true or false

// console.log(regex.test(str));

const regexCaseInsensitive = /CaT/i; // i stands for insensitive casing
// console.log(regex.test(str));

const strA = "son";
const strB = "run";
const strC = "fun";
const strD = "sun";

const regexWildCard = /.un/; // . stands for wildcard character
// console.log(regexWildCard.test(strA));
// console.log(regexWildCard.test(strB));
// console.log(regexWildCard.test(strC));
// console.log(regexWildCard.test(strD));

const Str = "I am kumar";
const regex3 = new RegExp(/Ram/i);
// console.log("Line 25: ", regex3.test(Str));

const strE = "big";
const strF = "bag";
const strG = "bug";
const strH = "bog";
const regexSet = /b[iau]g/; // Character set
// console.log(regexSet.test(strE));
// console.log(regexSet.test(strF));
// console.log(regexSet.test(strG));
// console.log(regexSet.test(strH));

const petStr =
  "My friend Raj has a pet fish, Goutam has pet dog and Maddy has a pet bird";
const petRegex = /dog|bird/; // | or
// console.log(petRegex.test(petStr));

const catStr = "cat";
const batStr = "bat";
const matStr = "Bat";
const atRegex = /[a-zA-Z]at/; // [a-z] Range
// console.log(atRegex.test(catStr));
// console.log(atRegex.test(batStr));
// console.log(atRegex.test(matStr));

const userName = "bijay_123";
const unRegex = /\w/; // shortcut for this pattern [A-Za-z0-9] is \w
// console.log(unRegex.test(userName));

const poem = "Twinkle, twinkle little star";
const strRegex = /twinkle/gi; // g = global
// console.log(poem.match(strRegex));

const river = "Mississippi";
const oneOrMoreRegex = /s+/gi; // + => One or more occurance
// console.log(oneOrMoreRegex.test(river));
// console.log(river.match(oneOrMoreRegex));

const goalWord = "goooooooal";
const gutPharse = "gut phrase";
const goRegex = /go*/gi; // * => Zero or more occurance
// console.log(goRegex.test(goalWord));
// console.log(goalWord.match(goRegex));
// console.log(goRegex.test(gutPharse));
// console.log(gutPharse.match(goRegex));

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
const anyWord = "3 blind mice";
const newRegex = /[^aeiou^0-9]/gi;
// console.log(newRegex.test(anyWord));
// console.log(anyWord.match(newRegex));

const firstString = "Ricky is first and can be found";
const firstRegex = /^Ricky/gi; // Here ^ means Search will only happen at the start of the text
const notFirst = "You can't find Ricky";
const lastRegex = /Ricky$/;
// console.log(firstRegex.test(firstString));
// console.log(firstRegex.test(notFirst));
// console.log(lastRegex.test(firstString));
// console.log(lastRegex.test(notFirst));

const storyEnd = "This is a never ending story";
const endRegex = /story$/;
// console.log(endRegex.test(storyEnd));

const randomWord = "abbbbbc";
const randomWordII = "abbbbc";
const limitRegex = /ab{3,}c/gi;
// console.log(limitRegex.test(randomWord));
console.log("Line 94: ", limitRegex.test(randomWordII));

const inputStr = "book"; // book.com
const regexPtr = /book(.com)?/gi; // ? is like 0 or more but in group match
// console.log(inputStr.match(regexPtr));

const iptStr = "xyzabyxzbxyab";
const plRegex = /x(?=y)/gi; // Positive look ahead
// console.log(iptStr.match(plRegex));

const ngRegex = /x(?!y)/gi; // Negative look ahead
// console.log(iptStr.match(ngRegex));

console.log(ngRegex.exec(iptStr));
