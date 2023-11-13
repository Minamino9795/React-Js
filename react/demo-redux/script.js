import { createStore } from 'https://cdn.skypack.dev/redux';

//////////////ví dụ my redux///////////
// function createStore(reducer) {
//     let state = reducer(undefined , {});
//     const subscribers = [];
//     return {
//         getState() {
//             return state;
//         },
//         dispatch(action) {
//             state = reducer(state, action)
//             // console.log(store.getState());
//             subscribers.forEach(subscriber=>subscriber());
//         },
//         subscribe(subscriber){
//             subscribers.push(subscriber);
//         }
//     }
// }



////////////////////////ví dụ my app///////////
const initState = 0;
function bankReducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state

    }
}
//store
const store = window.store = createStore(bankReducer)
// console.log(store);

//Action
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}
//dom event
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// event handler
deposit.onclick = function () {
    store.dispatch(actionDeposit(10))
}
withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10))
}
//listener
store.subscribe(() => {
    render();
})
// //render
function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState();

    // console.log(store.getState());
}
render();