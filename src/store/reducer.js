
const initialState = {
    counter: 0
}

const rootReducer = (state= initialState ,action) => {
        if(action.type === 'INCREMENT_COUNTER'){
            return Object.assign({},state,{counter: state.counter + 1})
        }
        if(action.type === 'DECREMENT_COUNTER'){
            return Object.assign({},state,{counter: state.counter - 1})
        }
        if(action.type === 'ADD_5'){
            return Object.assign({},state,{counter: state.counter + 5})
        }
        if(action.type === 'SUBTRACT_5'){
            return Object.assign({},state,{counter: state.counter - 5})
        }
        return state;
};


export default rootReducer;