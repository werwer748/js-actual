/**
 * this
 * JS는 this가 가리키는 대상이 매번 바뀜 거기에 따른 조작법이 따로있기도 함..
 * 헷갈리지만 중요한 부분
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 * * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다!!!!!!
 */
const testFunction = function() {
    return this;
}
console.log(testFunction()); //  Object [global] { ... }
console.log(testFunction() === global); // true

const yuJin = {
    name: "안유진",
    year: 2003,
    sayHello: function() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
};
//? this는 yuJin 객체를 가리킨다.
console.log(yuJin.sayHello()); // 안녕하세요 저는 안유진입니다.

function Person(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}
const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello()); // 안녕하세요 저는 안유진입니다.

// Person.prototype.dance = function() {
//     return `${this.name}이 춤을 춥니다.`;
// }
// //? prototype을 통해 추가한 메서드도 this는 yuJin2 객체를 가리킨다.
// console.log(yuJin2.dance()); // 안유진이 춤을 춥니다.

Person.prototype.dance = function() {
    function dance2() {
        //* 함수가 메서드로서 객체 최상단에서 호출되면 this는 객체를 가리키지만
        //* 그 외의 위치에서 일반 함수로 호출되면 this는 global을 가리킨다.
        return `${this.name}이 춤을 춥니다.`;
    }

    return dance2();
}
console.log(yuJin2.dance()); // undefined이 춤을 춥니다.

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 *
 * 1) 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 *
 * 쉽게 정리하면 메서드로 사용되는게 아니면 this는 global 이라는 거...
 */

/**
 * 원하는 값으로 this를 맵핑하는 방법
 *
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name;
}
console.log(returnName());

const yuJin3 = {
    name: "안유진"
}

//* returnName 함수의 this를 yuJin3로 맵핑

//? call: 컴마를 기반으로 아규먼트를 순서대로 넘겨준다.
console.log(returnName.call(yuJin3));
//? apply: 아규먼트를 리스트로 입력해야 한다.
console.log(returnName.apply(yuJin3));

function multiply(x, y, z) {
    return `${this.name} / 결과값: ${x * y * z}`;
}

//* call : 컴마로 구분하여 값을 넘겨준다.
console.log(multiply.call(yuJin3, 3, 4, 5));
//* apply : 리스트로 값을 넘겨준다.
console.log(multiply.apply(yuJin3, [3, 4, 5]));


//? bind: this를 바인딩만 해놓고 나중에 실행할 수 있다.
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
//* call, apply와 달리 바로 실행되지 않는다.
console.log(laterFunc);
console.log(laterFunc());