/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 Object Type이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (참/거짓)
 * 4) undefined (정의되지 않음)
 * 5) null (비어있음)
 * 6) Symbol (ES6에서 추가됨)
 *
 * 7) Object (객체)
 *   - Array, Function, RegExp, Date...
 */

//* Number ==================================
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

console.log("--------------------");
const infinity = Infinity;
const nInfinity = -Infinity;

console.log(infinity, typeof infinity);
console.log(nInfinity, typeof nInfinity);
console.log("=======================");
//* ==================================

//* String ==================================
const codeFactory = '"코드"팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) \n - 줄바꿈
 * 2) \t - 탭
 * 3) \\ - 역슬래시
 */
const iveYuJin = "아이브\n 안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t 원영";
console.log(iveWonYoung);
const backSlash = "아이브\\보고싶다.";
console.log(backSlash);
const smallQutoation = "I'm a boy";
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '" / / / / 
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 장원영`);
//* ==================================

//* Boolean ==================================
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);
//* ==================================

//* undefined ==================================
//? 사용자가 직접 값을 초기화하지 않았을때 지정되는 값 - 직접 undefined로 값을 초기화하는건 지양해야한다.
let noInit;
console.log(noInit, typeof noInit);

//* null ==================================
//? 값이 없다는 뜻 개발자가 명시적으로 없는 값으로 초기화할때 사용
let init = null;
console.log(init);
console.log(typeof init); // object로 나온다. -> JS 개발자들이 실수로 만든 버그
console.log("=======================");

//* Symbol ==================================
//? 유일무이한 값을 생성시 사용한다.
//? 다른 프리미티브 타입과 다르게 Symbol 함수를 호출해서 사용
const test1 = "1";
const test2 = "1";
console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2); // false
console.log("=======================");

//* Object ==================================
//? javascript는 모두 객체로 이루어져 있다.
//? Map과 비슷함 - key: value 쌍으로 이루어져 있다.
const dictionary = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
};
console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary.orange);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

/**
 * Array
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembersArray);

/**
 * Index
 * 0부터 시작
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = "An YuJin";
console.log(iveMembersArray);
console.log(typeof iveMembersArray); // object

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 *                 JS는 동적 타입 언어이다.
 */
