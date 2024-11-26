/**
 * Object - 객체
 */
let yujin = {
    name: '안유진',
    group: '아이브',

    // 메서드 - 객체 내부 함수
    dance: function () {
        //* this는 상황별로 다른 것을 가리킨다. 이 경우에는 메서드가 속한 객체를 가리킨다.
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yujin); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yujin.name); // 안유진 - yujin['name'] 와 같다.
const key = 'name';
console.log(yujin[key]); // 안유진
// 메서드 실행
console.log(yujin.dance()); // 안유진

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function () {
        // return `${this[nameKey]}이 춤을 춥니다.`;
        return `${this.name}이 춤을 춥니다.`; // 위와 같은 결과
    }
};

console.log(yujin2);
console.log(yujin2.dance());

yujin2[groupKey] = '유닛활동';
console.log(yujin2);

yujin2['englishName'] = 'An Yu Jin'; // 새로운 프로퍼티 추가
console.log(yujin2);

delete yujin2['englishName']; // 프로퍼티 삭제
console.log(yujin2);

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 내부의 프로퍼티는 변경이 가능하다.
 */
const wonyoung = {
    name: '장원영',
    group: '아이브'
}
console.log(wonyoung);
// wonyoung = {}; //! 에러 발생
wonyoung.name = '원영';
console.log(wonyoung);
console.log('===============================');

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(yujin2)); // [ 'name', 'group', 'dance' ]

/**
 * 모든 값 다 가져오기
 */
console.log(Object.values(yujin2)); // [ '안유진', '유닛활동', [Function: dance] ]

console.log('===============================');

const name = '안유진';
const yujin3 = {
    // 변수명 => 프로퍼티명, 변수값 => 프로퍼티 값
    name,
}
console.log(yujin3); // { name: '안유진' }