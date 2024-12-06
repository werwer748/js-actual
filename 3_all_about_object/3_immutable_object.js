/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin);

/**
 * Extensible - 확장이 가능한지 결정할 수 있다.
 */
//? 확장 가능한지 확인 - isExtensible
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin); // vocal이 추가된다.

//? 확장 금지 - preventExtensions
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false

yuJin['groupName'] = '아이브';
console.log(yuJin); // groupName이 추가되지 않는다.

//? 삭제는 가능하다... 추가는 안되는데 삭제는 됨
delete yuJin['position'];
console.log(yuJin);

console.log('===============================');

/**
 * Seal - 객체를 밀봉한다?
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

// 객체가 밀봉되어있는지 확인 - isSealed
console.log(Object.isSealed(yuJin2)); // false

// 객체 봉인 - seal ->  defineProperty를 통해 configurable을 false로 변경하는 것과 같다.
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // true

yuJin2['groupName'] = '아이브';
console.log(yuJin2); // groupName이 추가되지 않는다. - 에러 발생하지 않음

yuJin2['name'] = '유진안';
console.log(yuJin2); // groupName이 추가되지 않는다. - 에러 발생하지 않음

delete yuJin2['name'];
console.log(yuJin2); // name이 삭제되지 않는다. - 에러 발생하지 않음

Object.defineProperty(yuJin2, 'name', {
    value: '코피', // value 변경 가능
    writable: false, // 변경이 된다
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // 바뀌었다.
// { value: '코피', writable: false, enumerable: true, configurable: false }

console.log('===============================');

/**
 * Freezed - 가장 엄격한 불변 객체
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

// 객체가 동결되어있는지 확인 - isFrozen
console.log(Object.isFrozen(yuJin3)); // false

// 객체 동결 - freeze ->  defineProperty를 통해 configurable, writable을 false로 변경하는 것과 같다.
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // groupName이 추가되지 않는다. - 에러 발생하지 않음

delete yuJin3['name'];
console.log(yuJin3); // name이 삭제되지 않는다. - 에러 발생하지 않음

//! TypeError: Cannot redefine property: name
// Object.defineProperty(yuJin3, 'name', {
//     value: '잠이...ㅇㅇ',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
// { value: '안유진', writable: false, enumerable: true, configurable: false }

const yuJin4 = {
    name: '안유진',
    year: 2003,

    wonYoung: {
        name: '장원영',
        year: 2004,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false