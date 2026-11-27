const hp = Number(process.argv[2]);
const damage = Number(process.argv[3]);

if (Number.isNaN(hp)) {
    console.log("Недопустимое значение здоровья (нужно число)");
    process.exit(1);
  } 

if (hp <= 0) {
    console.log("Недопустимое значение здоровья (Нужно значение больше нуля)"); 
    process.exit(1);
  } 

if (Number.isNaN(damage)) {
    console.log("Недопустимое значение урона (нужно число)");
    process.exit(1);
  } 

if (damage <= 0) {
    console.log("Недопустимое значение урона (Нужно значение больше нуля)"); 
    process.exit(1);
  } 

const afterHit = Math.max(hp - damage, 0);

console.log(`Здоровье: ${hp}/${hp}`);
console.log(`Нанесенный урон: ${damage}`);
console.log(`Здоровье после удара: ${afterHit}/${hp}`);
console.log(`Расчетное количество ударов до смерти: ${Math.ceil(afterHit / damage)}`);
console.log(`Осталось здоровья: ${Math.round((afterHit / hp) *100)}%`)

/* PS C:\dev\learn-js> node .\01-osnovy\1.1-peremennye\damage.js 30 7
Здоровье: 30/30
Нанесенный урон: 7
Здоровье после удара: 23/30
Расчетное количество ударов до смерти: 4
Осталось здоровья: 77% */

/* PS C:\dev\learn-js> node .\01-osnovy\1.1-peremennye\damage.js 5 10
Здоровье: 5/5
Нанесенный урон: 10
Здоровье после удара: 0/5
Расчетное количество ударов до смерти: 0
Осталось здоровья: 0% */

/* PS C:\dev\learn-js> node .\01-osnovy\1.1-peremennye\damage.js abc 7
Недопустимое значение здоровья (нужно число) */

/* PS C:\dev\learn-js> node .\01-osnovy\1.1-peremennye\damage.js 30 0 
Недопустимое значение урона (Нужно значение больше нуля) */