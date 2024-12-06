/**
 * Closure
 *
 * 공식 문서에 정리된 클로저(Closure)에 대한 정의
 * A closure is the combination of a function
 * and the lexical environment within which that function was declared.
 *
 * -> 클로저는 어떤 함수와 해당 함수가선언된 레시컬 환경의 조합이다
 * -> 쉽게 말하면 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber()); // 5

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber; // 실행없이 함수 자체를 리턴
}

// innerGetNumber 함수를 리턴하고 getNumber는 종료
//* 상위함수보다 하위함수가 더 오래 살아있는 경우가 재현 됨
const runner = getNumber();

console.log(runner); // [Function: innerGetNumber]

// innerGetNumber를 실행한 것과 같다.
console.log(runner()); // 5

//? 실제 실행과정과 스택에 쌓이는 건 9_2_closure_example.html에서 확인

/**
 * 그렇다면 어떤 경우에 클로저를 사용할까?
 */
//* 1) 데이터 캐싱
function cacheFunction(newNum) {
    // 이 계산이 매우 오래걸리는 계산이라고 가정 했을 때
    var number = 10 * 10;

    //? 반복적으로 오래걸리는 계산을 수행해야하는 경우 클로저를 사용하면 효율적이다.
    //* 클로저 만들기!
    function innerCacheFunction(newNum) {
        return number * newNum;
    }

    return innerCacheFunction;
}

//* 오래걸리는 계산은 runner2에 cacheFunction()으로 innerCacheFunction을 반환받았을 때 한번 이루어 진다.
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

//* 2) 마찬가지로 캐싱이지만 반복적으로 특정값을 변환해야할 때
function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
//? 함수 바깥에서 number를 직접적으로 접근할 수 없지만 클로저를 통해 접근이 가능하다.
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

//* 3) 정보 은닉
function Idol(name, year) {
    this.name = name;

    // this 키워드로 선언하지 않았기 때문에 객체 생성시 접근할 방법이 없다.
    var _year = year;

    this.sayNameAndYear = function() {
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol("안유진", 2003);
//? 이런식으로 직접 접근하지 못하는 정보를 함수를 만들어두고 클로저를 통해 필요할 때 접근할 수 있다.
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진입니다. 2003에 태어났습니다.
console.log(yuJin.name);
console.log(yuJin._year); // undefined