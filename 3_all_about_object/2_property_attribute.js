/**
 * Property Attribute
 * (프로퍼티를 추가하면 자동으로 생성되는 속성)
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  생성할 때 호출되는 함수로 구성된 프로퍼티
 *                  (getter, setter)
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
// { value: 2003, writable: true, enumerable: true, configurable: true }
/**
 * 1) value - 실제 프로퍼티의 값
 *
 * 2) writable - 값을 수정 할 수 있는지 여부.
 *                false로 설정하면 프로퍼티 값을 수정할 수 없다.
 *
 * 3) enumerable - 열거가 가능한지 여부.
 *                  for..in 루프 등을 사용 할 수 있으면 true를 반환한다.
 *
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 속성 변경이 금지된다.
 *                   단, writable이 true일 경우 값 변경과 writable을 변경하는건 가능.
 */
//* 모든 프로퍼티의 속성을 확인하기
console.log(Object.getOwnPropertyDescriptors(yuJin));

console.log('===============================');

/**
 * Writable
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
};
console.log(yuJin2);
// { name: '안유진', year: 2003, age: [Getter/Setter] }

console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

//? 가장 기본적인 객체에 프로퍼티 추가 방법
// yuJin2['height'] = 172;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//? 프로퍼티 속성을 전부 지정하여 추가 방법
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    //* 지정하지 않은 속성은 false로 설정된다.
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

// writable만 false로 바꾸기
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('---------------------------------');
yuJin2.height = 172;
//? 에러는 안나지만 값이 바뀌지 않음
console.log(yuJin2.height);

console.log('===============================');

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
// [ 'name', 'year', 'age', 'height' ]

// Object.defineProperty(yuJin2, 'name', {
//     enumerable: false,
// });

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('---------------------------------');
console.log(Object.keys(yuJin2));
// [ 'year', 'age', 'height' ] - name이 사라짐
console.log(yuJin2); // name이 출력되지 않음(열거되지 않기 떄문인듯)
console.log(yuJin2.name); // 이렇게 하면 값이 찍힘


/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//! TypeError: Cannot redefine property: height - configurable이 false이기 때문에 재정의 불가능
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

//* configurable이 false여도 writable은 true이기 때문에 value는 변경 가능
Object.defineProperty(yuJin2 ,'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//* configurable이 false여도 writable이 true면 false로 변경 가능
Object.defineProperty(yuJin2 ,'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//!  Cannot redefine property: height
//* configurable이 false여도 writable이 true면 false로 변경이 됐지만 false라면 변경 불가능
// Object.defineProperty(yuJin2 ,'height', {
//     writable: true,
// });