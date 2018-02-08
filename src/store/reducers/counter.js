import * as actionTypes from '../actions'
const initialState = {
    counter: 0
    
}

const counterReducer = (state= initialState ,action) => {
        // if(action.type === 'INCREMENT_COUNTER'){
        //     return Object.assign({},state,{counter: state.counter + 1})
        // }
        // if(action.type === 'DECREMENT_COUNTER'){
        //     return Object.assign({},state,{counter: state.counter - 1})
        // }
        // if(action.type === 'ADD_5'){
        //     return Object.assign({},state,{counter: state.counter + action.val})
        // }
        // if(action.type === 'SUBTRACT_5'){
        //     return Object.assign({},state,{counter: state.counter - 5})
        // }
        switch(action.type){
            case actionTypes.INCREMENT:
                return Object.assign({},state,{counter: state.counter + 1})
            case actionTypes.DECREMENT:
                return Object.assign({},state,{counter: state.counter - 1})
            case actionTypes.ADD_5:
                return Object.assign({},state,{counter: state.counter + action.val})
            case actionTypes.SUBTRACT_5:
                return Object.assign({},state,{counter: state.counter - 5})
           
            return state
        }
        return state;
};


export default counterReducer;