/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    // 함수 바깥의 변수에 접근이 가능하다.
    console.log(numberOne);
}

// levelOne(); // 20

function leverOne() {
    var numberOne = 40;
    // 가장 가까운 스코프에 있는 변수를 찾아서 사용한다. - 덮어쓰는게 아님!
    console.log(numberOne);
}
// leverOne();
// console.log(numberOne); // 20 - 덮어써지지 않았다.


//* 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용하게 된다.
function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`); // 99
        console.log(`levelTwo numberOne : ${numberOne}`); // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); // 40
}

levelOne();
console.log(numberOne); // 20
//! 상위스코프에서 하위스코프로는 접근이 되지 않는다!
// console.log(numberTwo); // ReferenceError: numberTwo is not defined

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정하는 것.
 *
 * Dymamic Scope -> 실행 위치가 상위 스코프를 정하는 것.
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() {
    console.log(numberThree);
}

/**
 * functionTwo()는 글로벌 스코프에서 변수값을 가져옴.
 */
functionOne(); // 3

/**
 * 그렇다면 var와 let, const의 차이는?
 */

//* var는 함수를 생성하지 않는 이상 새로운 스코프를 생성해 내지 않는다.
var i = 999;

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 10

i = 999;

// let은 block level scope를 가진다.
//* 다시말해 let과 const는 괄호가 열리는 모든 상황에서 새로운 스코프를 생성한다.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 999

/**
 * 정리
 *
 * var 키워드는 함수 레벨 스코프만 만들어 낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */