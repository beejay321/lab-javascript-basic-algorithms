// Iteration 1: Names and Input
const hacker1 = "Tommy";
const hacker2 = "Sebastian";
console.log(`"The driver's name is ${hacker1}"`);
console.log(hacker1[0]);

console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`,
  );
}

// Iteration 3: Loops

const uppercaseName = hacker1.toUpperCase();
let spacedName = "";
for (let i = 0; i < uppercaseName.length; i++) {
  spacedName += uppercaseName[i] + " ";
}
console.log(spacedName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// const alphabet = "a,b,c,d,q,r,s,t,u,v";
// const firstletter = hacker1[0];
// const firstletter2 = hacker2[0];

// console.log(alphabet.indexOf(firstletter)); // 14
// console.log(alphabet.indexOf(firstletter2)); // 12

// if (alphabet.indexOf(firstletter) < alphabet.indexOf(firstletter2)) {
//   console.log(`The driver's name goes first. ${hacker1}`);
// } else {
//   console.log(`Yo, the navigator goes first, definitely. ${hacker2}`);
// }
// console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first. ${hacker1}`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely. ${hacker2}`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1:

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum turpis diam, sed dictum dui facilisis sit amet. Etiam luctus magna ac tellus rutrum aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam gravida tincidunt nunc. Sed eu mauris mauris. Ut nec felis nec augue dignissim consequat tincidunt vitae leo. Aenean fermentum semper ante non suscipit. Nullam eros est, pulvinar a lacinia vel, eleifend non libero. Quisque porta purus et aliquet porttitor. Etiam consequat mi in metus ullamcorper tempus. Donec mollis tempor dignissim. Proin viverra quis leo nec finibus. In eget elit orci. Integer nibh nisl, pulvinar at ipsum quis, sagittis mollis magna. Suspendisse bibendum felis id elit tristique vestibulum. Integer ac dui quis purus dapibus tincidunt ac sed augue. Nam ut gravida orci. Nam eget est vehicula, ultrices odio a, lobortis libero. Suspendisse laoreet, sapien id pulvinar egestas, leo tortor egestas lectus, vel efficitur risus nibh et dui. Proin iaculis, odio eu facilisis auctor, mi turpis mollis nulla, sagittis hendrerit lectus ex id nisi. Donec maximus pellentesque tellus vitae imperdiet. Etiam mollis aliquet elit, sed viverra felis ultrices sit amet. Nulla facilisi. Donec sit amet nisi sed ligula aliquet molestie. Aenean vel lacus ullamcorper, viverra tortor venenatis, sollicitudin ex. In finibus sodales purus, vel faucibus tellus placerat a. Suspendisse potenti. Aliquam ac volutpat nunc. Nullam tempor sagittis elit, nec placerat justo pretium ac. Donec ut lacus in neque ultricies facilisis sed eget nibh. Integer sollicitudin urna sed mi aliquet suscipit. Donec vehicula semper lorem, vitae consectetur magna consectetur sit amet. Fusce interdum leo ultrices, interdum odio vitae, consectetur neque. Mauris in pharetra lacus, nec pretium arcu. Donec eu tellus lacus.";

console.log(longText.split(" ").length);
const longTextArray = longText.split(" ");

let count = 0;
for (let index = 0; index < longTextArray.length; index++) {
  //   console.log(longTextArray[index]);
  if (longTextArray[index] === "et") {
    count++;
  }
}
console.log(count);
// Bonus 2

const phraseToCheck = "Amor, Roma";
let phraseToCheckReversed = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheckReversed += phraseToCheck[i];
}
const a1 = phraseToCheck.toUpperCase().split(" ");
const a2 = phraseToCheckReversed.toUpperCase().split(" ");
// let res = a1.filter((e) => !a2.includes(e));
// console.log(res);
if (
  phraseToCheck.toUpperCase().split(" ") ===
  phraseToCheckReversed.toUpperCase().split(" ")
) {
  console.log("its a palidrome");
} else console.log("its not a palindrome");
