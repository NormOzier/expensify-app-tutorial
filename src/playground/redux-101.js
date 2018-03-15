import {createStore} from 'redux';

//Action generators - functions that returns action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

const resetCount = (count = 0) => ({
    type: 'RESET'
})

//Reducers
//Reducers are pure functions
//pure functions are functions that doesnt interact with objects outside it's scope
//Dont change state or action. ie: read them instead


const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET':
            return{
                count: 0
            }
        default:
            return state;
    } 
    console.log('running');
    return state;
}

const store = createStore(countReducer);

//receive constant update on the state
//calling the const causes it to unsubscribe
const unsub = store.subscribe (() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));

/*
same thing as redux store
this.setState((prevState) => {
    return prevState
});
*/
