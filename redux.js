const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    value: 0,
    age: 17
}

//Reducer

const rootReducer = (state = initialState, action) => {
    console.log('action', action);
    // if (action.type === 'INC_VALUE') {
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }

    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }

        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}


//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscribe to store changes

store.subscribe(() => {
    console.log('subscribe', store.getState());
}
);


//Dispatch action
store.dispatch({
    type: 'ADD_AGE',
});
store.dispatch({
    type: 'CHANGE_VALUE', newValue: 10
});

console.log(store.getState());



