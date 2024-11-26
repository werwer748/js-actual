/**
 * function -> 함수
 */

/**
 * x라는 숫자에 * 10 / 2 % 3을 스트링으로 변환해서 받고싶다면?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * Don't Repeat Yourself
 */
function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}
//* 함수를 호출
// calculate(); // 아래 함수를 호출하게 되어 파라미터가 없이 계산됨 => NaN

//* 파라미터 사용
// 같은 이름의 함수를 만들면 덮어쓰기가 된다.
function calculate(n) {
    console.log((n * 10 / 2 % 3).toString());
}
/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고 한다.
 *
 * 실제 입력하는 값은 Argument라고 한다.
 */
calculate(4);
calculate(5);

// 순서대로 여러 파라미터를 받을 수 있다.
function multiply(x, y) {
    console.log(x * y);
}
// x = 2, y = 4
multiply(2, 4);

// default Parameter
function multiply(x, y = 10) {
    console.log(x * y);
}
multiply(2, 4);
multiply(2); // y값이 없기때문에 default값인 10이 들어간다.

console.log('-----------------');

// return => 함수의 결과값을 반환한다.
function multiply(x, y = 10) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log('result1:::', result1);

const result2 = multiply(4, 5);
console.log('result2:::', result2);

/**
 * Arrow Function
 */
const arrowMultiply = (x, y) => {
    return x * y;
};
console.log('arrowResult1:::', arrowMultiply(3, 4));

// 간결하게 쓰기
const arrowMultiply2 = (x, y = 10) => x * y;
console.log('arrowResult2:::', arrowMultiply2(4));

const arrowMultiply3 = x => x * 2;
console.log('arrowResult3:::', arrowMultiply3(2));


//* x 파리미터를 받는 함수는 y 파라미터를 받는 함수를 반환하고, y 파라미터를 받는 함수는 z 파라미터를 받는 함수를 반환한다.
const arrowMultiply4 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(arrowMultiply4(2)(5)(7));
console.log(arrowMultiply4()()(7)); // x: undefined, y: undefined, z: 7
console.log(arrowMultiply4(2)()()); // x: 2, y: undefined, z: undefined
console.log(arrowMultiply4()(5)()); // x: undefined, y: 5, z: undefined
console.log(arrowMultiply4()()()); // x: undefined, y: undefined, z: undefined
console.log(arrowMultiply4()); // Function(anonymous): 함수가 반환된다.

//? 일반함수로 작성하면?
function returnFunction(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}, y: ${y}, z: ${z}`;
        };
    }
}
console.log(returnFunction(3)(4)(5));

// 함수를 변수에 할당(익명 함수)
const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(3, 4));
console.log('-----------------');

const multiplyThree = function(x, y, z) {
    console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
    return x * y * z;
};
console.log(multiplyThree(4, 5, 6));

// 무한하게 파라미터를 받을 수 있다.
const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 즉시실행 함수 - immediately invoked function
(function(x, y) {
    console.log(x * y);
})(4, 5);

console.log(typeof multiply); // function

//? multiply는 Object의 인스턴스인지 확인
console.log(multiply instanceof Object); // true => 함수는 객체의 인스턴스이다.