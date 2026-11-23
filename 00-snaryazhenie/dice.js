const formula = process.argv[2];
console.log("Формула:", formula);

if (!formula) {
    console.log("Использование: node dice.js 2d6+3");
    process.exit(1);
  }