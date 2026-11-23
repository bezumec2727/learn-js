const formula = process.argv[2];
console.log("Формула:", formula);

if (!formula) {
    console.log("Использование: node dice.js 2d6+3");
    process.exit(1);
  }

function rollDie(Sides)  {
    console.log("Случайный d"+ Sides + ":", Math.floor(Math.random() * Sides) + 1);
}


console.log(rollDie(20));
console.log(rollDie(6));
console.log(rollDie(4));