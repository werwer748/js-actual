/**
 * Prototype
 */
const testObj = {};

// __proto__ : 모든 객체에 존재하는 프로퍼티다.
// 부모 클래스로 부터 상속한 값에 해당되는 프로퍼티다.
console.log(testObj.__proto__);
// [Object: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

// 그냥 이렇게 prototype을 찍으면 빈 객체가 나온다. - 숨겨져 있다
console.log(IdolModel.prototype);
// {}

// 숨겨진값까지 함께보기
console.dir(IdolModel.prototype, {
    showHidden: true,
});
/**
 * <ref *1> {
 *   [constructor]: [Function: IdolModel] {
 *     [length]: 2,
 *     [name]: 'IdolModel',
 *     [arguments]: null,
 *     [caller]: null,
 *     [prototype]: [Circular *1]
 *   }
 * }
 */

// circular reference: 서로 참조하는 객체
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);

//* 결국 모든 것은 Object....
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

// 모든 객체에 존재하는 프로퍼티 ex) toString 메서드는 정의해준적이 없다.
console.log(yuJin.toString());
// 모드 Object에서 상속받은 메서드인 것
console.log(Object.prototype.toString());

console.log('===============================');
/**
 * 이렇게 __proto__가 다른 prototype과 연결되어있는 것이 연속되어있는 형태를
 * prototype chain이라고 한다.
 */

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
// 메모리를 각각 차지하고 있기 때문에 false가 나온다.
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

console.log(yuJin2.hasOwnProperty('sayHello')); // true - 상속받은게 아닌 객체의 고유 메서드로 취급됨

console.log('===============================');

// 이렇게 공통된 기능을 하는 메서드가 각각 메모리를 차지하고 있기 때문에 비효율적이다.
// 이럴때 prototype을 사용한다.
function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel3.sayStaticHello = function () {
    return `안녕하세요! 저는 static 메서드 입니다.`;
}
// prototype을 통한 확장
IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사합니다.`;
};

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello()); // 정상작동 확인
// console.log(yuJin3.sayStaticHello()); // static 메서드는 인스턴스에서 사용할 수 없다.
console.log(wonYoung3.sayHello()); // 정상작동 확인
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true - 메모리를 공유하고 있다.

console.log(yuJin3.hasOwnProperty('sayHello')); // false - prototype을 통해 받은 메서드는 yuJin3의 고유 메서드가 아니다.


console.log(IdolModel3.sayStaticHello());

console.log('===============================');
/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    //* override로 함수 재정의
    //* 프로퍼티 셰도잉 - class에서 override와 같은 개념
    this.sayHello = function () {
        return `안녕하세요 저는 인스턴스 메서드 입니다!`;
    }
}

IdolModel4.prototype.sayHello = function () {
    return `안녕하세요 저는 prototype 메서드입니다!`;
}
const yuJin4 = new IdolModel4('안유진', 2003);

console.log(yuJin4.sayHello());

console.log('===============================');

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function() {
    return `${this.name} 인사합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype); // true
//* Object.getPrototypeOf(`객체`)는 객체.__proto__와 같은 역할을 한다.
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello());
console.log(ray.dance());
// console.log(ray.sayHello()); //! 에러~!
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

// setPrototypeOf를 통해 상속받을 대상을 지정할 수 있다.
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // false - setPrototypeOf로 원래 프로토타입과 연결이 완전히 끊어짐
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(FemaleIdolModel.prototype === IdolModel); // false

FemaleIdolModel.prototype = IdolModel.prototype

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true