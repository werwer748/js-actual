/**
 * Variables 선언하기
 *
 * 1) var - 거의 쓰이지는 않음 호이스팅 직빵
 * 2) let
 * 3) const
 */
var name = "코드팩토리";
console.log(name);

// var age = "32"; // 문자
var age = 32; // 숫자
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 변경할 수 있음
 */
ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

//? const는 값을 변경할 수 없음
// newJeans = "뉴진스2"; //! 에러

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것. -> var name; 변수이름을 정하고 메모리를 할당
 * 2) 할당 -> name = "코드팩토리"; 메모리에 값을 넣는 것
 * 3) 선언과 할당을 동시에 할 수 있음 -> var name = "코드팩토리";
 */

let girlFriend;
console.log(girlFriend); // undefined

//! 값을 할당하지 않으면 const로 선언할 수 없음
// const girlFriend2;
