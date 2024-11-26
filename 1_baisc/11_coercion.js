/**
 * ㅌㅏ입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(stringAge, typeof stringAge);

// 암묵적
let test = age + ''; // 스트링이 된다.
console.log(typeof test, test);

//! 이런 형태로 코드를 작성하는것은 좋지 않다!
console.log('98' + 2, typeof ('98' + 2)); // 982 string
console.log('98' * 2, typeof ('98' * 2)); // 196 number
console.log('98' - 2, typeof ('98' - 2)); // 96 number

console.log('-----------------');

/**
 * 올바르게 명시적 변환을 통해 코드를 작성하기
 */
// string으로 변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), Infinity.toString());
console.log('-----------------');

// number로 변환
console.log(typeof parseInt('0'), parseInt('0')); // 정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // 실수로 변환
console.log(typeof +'1', +'1');
console.log('-----------------');

// boolean으로 변환 - 자바스크립트는 이상해~
console.log(!!'x');
console.log(!!''); // falsy => '', 0, null, undefined, NaN, false
console.log(!!0); // falsy
console.log(!!'0'); // true => string에 글자가 있기때문에...
console.log(!!'false'); // true => string에 글자가 있기때문에...
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log('-----------------');

console.log(!!{}); // true
console.log(!![]); // true
/**
 * 정리
 * 1. 아무 글자도 없는 String => false
 * 2.값이 없는 경우 => false
 * 3. 0 => false
 */