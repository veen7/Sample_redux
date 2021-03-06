import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
class Counter extends Component {
    // state = {
    //     counter: 0
    // }
    
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() =>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map( storedResult => (
                        <li onClick={() => this.props.onDeleteResult(storedResult.id)} key={storedResult.id}>{storedResult.value}</li>
                    ))}
                    
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return{ 
        onIncrementCounter: () => dispatch({type:'INCREMENT_COUNTER'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT_COUNTER'}),
        onAddCounter: () => dispatch({type: 'ADD_5',val:10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT_5'}),
        onStoreResult: (result) => dispatch({type:'STORE_RESULT',result: result}),
        onDeleteResult: (id) => dispatch({type:'DELETE_RESULT',id:id})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);