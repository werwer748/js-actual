/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value 다.
 * 2) 객체는 copy by reference 다.
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);
console.log('-------------------------------');
clone += ' 안유진 입니다.';
console.log(original); // 원본에 아무 영향이 없음
console.log(clone); // 복사본에만 추가됨

console.log('===============================');
/**
 * 변수에 객체를 할당
 * 객체는 다른 메모리 공간에 저장됨
 * 변수는 객체가 저장된 메모리 주소를 가리킴
 *
 * 따라서, 변수로 선언한 객체를 다른 변수에 할당하면
 * 같은 메모리 주소를 가리키게 된다.
 */
let originalObj = {
    name: '안유진',
    group: '아이브'
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('-------------------------------');
originalObj.group = '유닛활동';
console.log(originalObj);
console.log(cloneObj); // 원본과 복사본이 같은 메모리 주소를 가리키고 있기 때문에 같은 결과가 나온다.

console.log('-------------------------------');
console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

console.log('===============================');
originalObj = {
    name: '최지호',
    group: '코드팩토리'
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리'
};
// 객체 안의 값들이 같다고해서 같은 객체가 아니다.
console.log(originalObj === cloneObj); // false

console.log('===============================');
const yujin1 = {
    name: '안유진',
    group: '아이브'
};
const yujin2 = yujin1;
const yujin3 = {
    name: '안유진',
    group: '아이브'
};

console.log(yujin1 === yujin2); // true
console.log(yujin1 === yujin3); // false
console.log(yujin2 === yujin3); // false

console.log('===============================');
/**
 * Spread Operator
 */
const yujin4 = {
    ...yujin3, // 복사해서 값을 넣음 - 새로운 메모리 주소에 저장
}
console.log(yujin4);
console.log(yujin4 === yujin3); // false

const yujin5 = {
    year: 2003,
    ...yujin3,
}
console.log(yujin5);


const yujin6 = {
    // 프로퍼티 내부에 키값 순서때문에 새로 넣은 name은 덮어씌워진다.
    name: '콩콩',
    ...yujin3,
};
console.log(yujin6);

const yujin7 = {
    ...yujin3,
    // 프로퍼티 내부에 키값 순서때문에 새로 넣은 name으로 덮어씌워진다.
    name: '콩콩',
};
console.log(yujin7);

const numbers = [1, 3, 5];
// 배열에서도 순서대로 저장
const numbers2 = [
    10,
    ...numbers,
    10
];
console.log(numbers2);