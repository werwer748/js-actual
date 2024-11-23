/**
 * Loops
 *
 * 1. for loop
 * 2. while loop
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("=======================");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("=======================");
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// for (let i = 0; i < 6; i++) {
//     let star = ''
//     for (let j = 0; j < 6; j ++) {
//         star += '*'
//     }
//     console.log(star);
// }
let square = '';
let side = 6;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);
console.log("=======================");

/**
 * for...in
 *
 * 객체의 속성들을 순회할 때 사용
 */
const yujin = {
    name: "안유진",
    year: 2003,
    group: '아이브'
};

for (let key in yujin) {
    console.log(key);
}

console.log('-----------------');
const iveMembersArray = [
    "안유진",
    "가을",
    "레이",
    "장원영",
    "리즈",
    "이서"
];

for (let key in iveMembersArray) {
    // 배열의 경우 key가 index가 된다.
    console.log(key); // 0, 1, 2, 3...
    console.log(`${key}: ${iveMembersArray[key]}`); // 안유진, 가을, 레이...
}
console.log("=======================");
/**
 * for...of
 * 배열의 요소들을 순회할 때 사용
 */
for (let value of iveMembersArray) {
    console.log(value);
}

//! 객체로 for...of를 사용하면 에러가 발생한다.
// for (let key of yujin) {
//     console.log(key);
// }
console.log("=======================");

/**
 * while loop
 */
let number = 0;

while (number < 10) {
    number++;
    console.log(number);
}

console.log("=======================");
/**
 * do...while loop
 * 거의 안씀
 */
number = 0;

do {
    number++;
    console.log(number);
} while (number < 10);


console.log('-----------------');
/**
 * break
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('-----------------');
number = 0;
while (number < 10) {
    if (number === 5) {
        break;
    }
    number++;
    console.log(number);
}

console.log("=======================");
/**
 * continue
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('-----------------');
number = 0;

while (number < 10) {
    number++;

    if (number === 5) {
        continue;
    }
    console.log(number);
}
