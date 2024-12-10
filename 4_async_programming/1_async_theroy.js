/**
 * Async theory
 * JS는 기본적으로 싱글 스레드 언어이다.
 * 하지만, 비동기 처리를 통해 여러 작업을 동시에 처리할 수 있다.
 */
//* 동기적으로 실행되는 코드
// function longWork() {
//     const now = new Date();
//
//     /**
//      * ? milliseconds since epoch - 깨알 팁
//      * ? 1970년 1월 1일 00:00:00 UTC부터 현재까지 경과된 시간을 밀리초로 반환해준다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + (2 * 1000);
//
//     while (new Date().getTime() < afterTwoSeconds) {
//         // 2초동안 하고싶은 작업이라고 가정
//     }
//
//     console.log('완료!');
// }
//
// console.log('Hello!');
// longWork();
// console.log('World!');

//* 비동기적으로 실행되는 코드
function longWork() {
    setTimeout(() => {
        console.log('완료!');
    }, 2000);
}

console.log('Hello!');
longWork();
console.log('World!');
//* 위 코드를 실행하면 Hello! -> World! -> 완료! 순으로 출력된다.
//* setTimeout이 비동기 함수여서 그런 것