/**
 * Hoisting?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * !(실제 최상단으로 이동하는 것은 아님)
 */
console.log("Hello");
console.log("World");
console.log("===========");

//? 변수를 선언하기 전에 사용했는데 에러가 없음
//? 콘솔에는 undefined가 찍힘 -> 선언은 했지만 값을 할당하지 않은것으로 간주되는 것.
//* 아래 코드처럼 작동하는 것.
// console.log(name);
// var name = "코드팩토리";
// console.log(name);

// var name;
// console.log(name);
// name = "코드팩토리";
// console.log(name);

//* let과 const로 살펴보기
/**
 * let과 const는 호이스팅이 발생하지 않는 것이 아니다.
 * 실제로 변수 선언없이
 * console.log(yujin); => yujin is not defined 즉 undefined로 보는 셈
 * let yujin = "안유진"; => ReferenceError: Cannot access 'yujin' before initialization 뒤늦게 선언한 것으로 간주
 * const yujin = "안유진"; => ReferenceError: Cannot access 'yujin' before initialization 뒤늦게 선언한 것으로 간주
 *
 * 앞서 서술한 것처럼 실제 호이스팅이 발생하지 않는게 아니라
 * 값이 할당되지 않은 경우 에러를 발생시켜주는 것.
 * => 값을 미리가져오는 에러를 방지하는 것.
 */
console.log(yujin); //! yujin is not defined
// let yujin = "안유진"; //! ReferenceError: Cannot access 'yujin' before initialization
// const yujin = "안유진"; //! ReferenceError: Cannot access 'yujin' before initialization
