const redux = require('redux');

const createStore = redux.createStore

//reducer
const rootReducer = (state = {counter:0},action) => {
    if( action.type === 'INC_ONE'){
        return Object.assign({}, state, {counter: state.counter + 1});
    }
    if( action.type === 'INC_TEN'){
        return Object.assign({}, state, {counter: state.counter + 10});
    }
}
//store

const store = createStore(rootReducer);

store.dispatch({type:'INC_ONE'});
store.dispatch({type:'INC_TEN',value:10})
console.log(store.getState());
//dispatching actions
//subscribe