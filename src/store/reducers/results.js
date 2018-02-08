import * as actionTypes from '../actions'
const initialState = {   
    results: []
}

const resultReducer = (state= initialState ,action) => {
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
            case actionTypes.STORE_RESULT:
                return Object.assign({},state,{results: state.results.concat({id: new Date(),value:action.result})})
            case actionTypes.DELETE_RESULT:            
                return Object.assign({},state,{results: state.results.filter( result => result.id !== action.id)})
            return state
        }
        return state;
};


export default resultReducer;