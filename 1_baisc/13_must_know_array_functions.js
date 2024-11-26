/**
 * Array Functions
 */
let iveMembers = [
    "안유진",
    "가을",
    "레이",
    "장원영",
    "리즈",
    "이서"
];

console.log(iveMembers);
console.log('===============================');
//* 배열 원본을 직접 조작 - 원본이 유지되는 코드를 쓰는것이 더 좋다.
// push => 배열의 끝에 값을 추가
// iveMembers.push('콩콩');
console.log(iveMembers.push('콩콩')); // 업데이트된 배열의 길이를 반환
console.log(iveMembers);

console.log('-------------------------------');
// pop => 배열의 끝에 값을 제거
console.log(iveMembers.pop()); // 제거된 값을 반환
console.log(iveMembers);

console.log('-------------------------------');
// shift => 배열의 첫번째 값을 제거
console.log(iveMembers.shift()); // 제거된 값을 반환
console.log(iveMembers);
console.log('-------------------------------');
// unshift => 배열의 첫번째에 값을 추가
console.log(iveMembers.unshift('안유진')); // 업데이트된 배열의 길이를 반환
console.log(iveMembers);

console.log('-------------------------------');
// splice => 배열의 특정 위치에 값을 추가하거나 제거
// splice(시작위치, 제거할 개수, 추가할 값)
console.log(iveMembers.splice(0, 3)); // 제거된 값 []로 반환
console.log(iveMembers);

console.log('===============================');
iveMembers = [
    "안유진",
    "가을",
    "레이",
    "장원영",
    "리즈",
    "이서"
];
console.log(iveMembers);
//* 새로운 배열을 반환 - 원본이 유지되는 코드를 쓰는것이 더 좋다.
// concat => 배열을 합친다.
console.log(iveMembers.concat('콩콩'));
console.log(iveMembers); // 원본은 변하지 않는다.

console.log('-------------------------------');
// slice => 배열의 일부를 잘라서 반환
// slice(시작위치, 끝위치) :: 끝위치 바로 앞까지 잘라준다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log('===============================');
// spread operator
let iveMembers2 = [
    ...iveMembers // 배열의 값들만 펼쳐서 넣는다.
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers
];
console.log(iveMembers3); // 2차원 배열

console.log('-------------------------------');
let iveMembers4 = iveMembers;
console.log(iveMembers4); // 원본을 참조한다.

/**
 * 변수에 배열을 바로 할당하면 원본을 참조한다. 메모리 주소가 같다는 뜻
 * spread operator를 사용하면 새로운 배열을 만든다. 다른 메모리에 생성된 객체가 됨
 */
console.log(iveMembers === iveMembers4); // true
console.log([...iveMembers] === iveMembers); // false

console.log('===============================');
// join => 배열을 문자열로 변환
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서

console.log('===============================');
// sort => 배열을 정렬 - 기본 오름차순
// 원본 배열을 정렬한다.
iveMembers.sort();
console.log(iveMembers);
// reverse => 배열 순서 뒤집기
console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3, 10];
console.log(numbers);
// 예상대로 작동하지 않는다. => 문자열로 변환되어 정렬되기 때문..
console.log(numbers.sort()); // 1, 10, 3, 5, 7, 9

/**
 * sort를 사용해 제대로 정렬하려면?
 *
 * a, b를 비교했을 때
 * 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환한다.
 * 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환한다.
 * 3) 원래 순서를 그대로 두려면 0을 반환한다.
 */
// 오름차순 정렬
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

// 내림차순 정렬
numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

console.log('===============================');
// map => 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers); // 원본 배열은 변하지 않았다.

console.log('===============================');
// filter => 주어진 함수의 테스트를 통과하는(true를 반환하는) 모든 요소를 모아 새로운 배열로 반환

numbers = [1, 9, 7, 5, 3, 10, 6];

console.log(numbers.filter((x) => false)); // []
console.log(numbers.filter((x) => x % 2 === 0)); // [ 10, 6 ]

// find => 주어진 판별 함수를 만족하는(true를 반환하는) 첫 번째 요소의 값을 반환
console.log(numbers.find((x) => x % 2 === 0)); // 10

// findIndex => 주어진 판별 함수를 만족하는(true를 반환하는) 첫 번째 요소의 인덱스를 반환
console.log(numbers.findIndex((x) => x % 2 === 0)); // 5

console.log('===============================');
// reduce => 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
// reduce((누적값, 현재값) => {}, 초기값)
console.log(numbers.reduce((prev, now) => prev + now, 0));