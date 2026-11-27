console.log(10 % 4); // 5 (на деле 2)
console.log(2 + 3 * 4); // 14
console.log((2 + 3) * 4); // 20
console.log("2" + 3 * 4); //212
console.log("10" / "2"); // NaN (на деле 5)
console.log("10" * "abc");  //NaN
console.log(Number("")); // NaN (на деле 0)
console.log(Number(" 7 ")); // 7
console.log(parseInt("3d6")); // 36 (на деле 3)
console.log(1 == "1"); // True
console.log(1 === "1"); // False
console.log(NaN === NaN); // False
console.log(Number.isNaN(Number("x"))); // True
console.log(0.1 + 0.2 === 0.3); // Fasle

let hp = 10;
hp =+ 3;
console.log(hp); //3
hp += 3;
hp++;
console.log(hp); //7