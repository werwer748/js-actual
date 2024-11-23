//* Operator - 연산자

// 산술 연산자
console.log(10 + 20); // 더하기
console.log(10 - 10); // 빼기
console.log(10 * 10); // 곱하기
console.log(10 / 10); // 나누기
console.log(10 % 10); // 나머지

console.log("-----------------");

// ()를 이용하여 연산 순서를 정할 수 있다.
console.log((10 + 20) * 10); // 300
console.log("-----------------");

// 증감
let counter = 1;

counter++;
console.log(counter); // 2

counter--;
console.log(counter); // 1

// 증감 위치에 따라 결과가 달라진다.
let result = 1;
console.log(result); // 1

// ++가 뒤에 있으면 먼저 result에 할당 후 counter가 증가
result = counter++;
console.log(result, counter); // 1 2
// --가 뒤에 있으면 먼저 result에 할당 후 counter가 감소
result = counter--;
console.log(result, counter); // 2 1

// ++가 앞에 있으면 먼저 counter가 증가 후 result에 할당
result = ++counter;
console.log(result, counter); // 2 2
// --가 앞에 있으면 먼저 counter가 감소 후 result에 할당
result = --counter;
console.log(result, counter); // 1 1

/**
 * 숫자타입이 아닌 타입에 +, - 사용하기
 */
let sample = "99";

console.log(+sample); // 99
console.log(typeof +sample); // number

// 원본은 변하지 않는다.
console.log(sample); // '99'
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = "hello";
console.log(+sample); // NaN(Not a Number)

sample = "99";
console.log(-sample); // -99
console.log(typeof -sample); // number
console.log("-----------------");

/**
 * 할당 연산자 (Assignment Operator)
 * +=, -=, *=, /=, %=
 * 계산 후 할당
 */
let number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0
console.log("-----------------");

/**
 * 비교 연산자 (Comparison Operator)
 *
 * 1) 값의 비교
 * - 잘안씀
 * ==, !=
 *
 * 2) 값과 타입의 비교
 * ===, !==
 */

console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == ""); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == '1'); // true

console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === "") // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === '1'); // false
console.log("-----------------");

console.log(5 != 5);
console.log(5 != "5");
console.log(0 != "");
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log("-----------------");
console.log(5 !== 5);
console.log(5 !== "5");
console.log(0 !== "");
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log("==========================================");

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자
 */
console.log(10 > 0 ? "참" : "거짓");
console.log("==========================================");


/**
 * 논리 연산자
 * &&(and), ||(or)
 */
//* && 는 조건이 모두 true여야 true를 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log("-----------------");
//* || 는 조건 중 하나라도 true면 true를 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

console.log("-----------------");

/**
 * 단축 평가 (short-circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측값 반환
 * &&를 사용했을 때 좌측이 false면 좌측값 반환
 *
 * ||를 사용했을때 좌측이 true면 좌측값 반환
 * ||를 사용했을때 좌측이 false면 우측값 반환
 */
console.log(true || "hello");
console.log(false || "hello");
console.log(false && "hello");
console.log(true && "hello");

console.log(true && true && "ive"); // ive
console.log(true && false && "ive"); // false

console.log("==========================================");

/**
 * 지수 연산자
 */
// 2의 2승
console.log(2 ** 2); // 4
// 10의 3승
console.log(10 ** 3); // 1000

/**
 * null 연산자
 */
let name;
console.log(name);

//* ?? 연산자는 좌측값이 null 또는 undefined일때 우측값을 반환
name = name ?? "코드팩토리";
console.log(name);
// 앞서 값이 할당되어서 ?? 연산자가 실행되지 않음
name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= "코드팩토리";
console.log(name2);