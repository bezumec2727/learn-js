const count = process.argv[2];

if (!count) {
    console.log("Введите число.");
    process.exit(1);
  }

if (typeof count !== 'number') {
    console.log("Введите число, а не буквы.");
    process.exit(1);
}

console.log("Бросков:", count);

function roll20() {
    const roll = Math.floor(Math.random() * 20) + 1;
    return roll;
  }

const rolls = []
let pcrit = 0
let ncrit = 0
let sum = 0

for (let i = 0; i < count; i++) {
        let result = roll20()
        rolls.push(result)
        if (result === 20) {
             pcrit = pcrit + 1
            }
        if (result === 1) {
             ncrit = ncrit + 1
            }
        sum = sum + result 
    }

const middle = sum / count

console.log("Критов (20):" + pcrit)
console.log("Провалов (1):" + ncrit)
console.log("Средний результат:" + middle )