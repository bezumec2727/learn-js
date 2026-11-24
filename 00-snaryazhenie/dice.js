const formula = process.argv[2];
console.log("Формула:", formula);

if (!formula) {
    console.log("Использование: node dice.js 2d6+3");
    process.exit(1);
  }

if (Number.isNaN) {
  console.log("Что за '" + formula + "'? Мне нужна формула типа 2d6+3!")
  process.exit(1)
}

function rollDie(sides)  {
    const roll = Math.floor(Math.random() * sides) + 1;
    console.log("Случайный d"+ sides + ":", roll);
    return roll;
}

console.log(rollDie(20));
console.log(rollDie(6));
console.log(rollDie(4));

const numbers = formula.split("d");
const right = numbers[1].split("+");

let count = Number(numbers[0]);
if (count == 0) {
  count =+ 1
}
const sides = Number(right[0]);
let bonus = 0;

if (formula.includes("+")) {
  bonus = Number(right[1]);
}
console.log("Количество костей:", count);
console.log("Тип кости: d" + sides);
console.log("Бонус:", bonus);


const rolls = [];
let sum = 0;

for (let i = 0; i < count; i++) {  
  let result = rollDie(sides);
  if (sides == "20") {
    if (result == 20) {
      console.log("💥 КРИТ!")
    }
    if (result == 1) {
      console.log("💀 Провал!")
   }
  }
  rolls.push(result);
  sum = sum + result;
}

let total = sum + bonus

console.log("🎲 " + formula + ": [" + rolls.join(", ") + "] + " + bonus + " = " + total);