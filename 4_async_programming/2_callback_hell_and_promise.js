/**
 * Callback
 */
function waitAndRun() {
    //? setTimeout에 첫번째 인자 같이 어떤 작업이 끝나고 다시 불리는 함수가 callback 함수이다.
    //? 쉽게 얘기하면 나중에 실행되는 함수~
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

//* 콜백 지옥...
function waitAndRun2() {
    setTimeout(() => {
        console.log('1번 콜백 끝');

        setTimeout(() => {
            console.log('2번 콜백 끝');

            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}

// waitAndRun2();
//* 1번 콜백 끝 -> 2번 콜백 끝 -> 3번 콜백 끝

/**
 * Promise
 * - 비동기 처리를 위한 객체
 * - 성공 시 resolve, 실패 시 reject를 호출
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// then을 통해 resolve된 값을 받아올 수 있다.
// timeoutPromise.then((res) => {
//     console.log('then');
//     console.log(res);
// });

// Promise를 반환하는 함수
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // 성공
        resolve('완료');

        // 에러 던지기
        // reject('에러');

        //* 이런식으로 사용할 수 있다.
        // if (xxx) {
        //     resolve('완료');
        // } else {
        //     reject('에러');
        // }
    }, seconds * 1000);
});

//* 체이닝을 통해서 콜백 지옥을 해결
// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//
//         // return getPromise(2);
//     })
//     .catch((res) => {
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     // finally는 성공 실패 여부와 상관없이 실행된다. - 따로 인자를 받지 않는다.
//     .finally(() => {
//         console.log('--- finally ---');
//     });
    // .then((res) => {
    //     console.log('--- second then ---');
    //     console.log(res);
    //
    //     return getPromise(3);
    // })
    // .then((res) => {
    //     console.log('--- third then ---');
    //     console.log(res);
    //
    //     return getPromise(4);
    // });

//* 여러개의 Promise를 동시에 실행
Promise.all([
    // 모든 Promise가 동시에 실행된다.
    // 가장 오래 걸리는 함수가 끝나야 then이든 catch든 실행된다.
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res) => {
    // 실행한 순서대로 결과가 배열로 반환된다.
    console.log(res); // ['완료', '완료', '완료']
});