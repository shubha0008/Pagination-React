import React, {useReducer} from 'react'

// const initialState = 0 
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}


const reducer = (state, action) => {
    // action instructs reducer function
    // switch(action){
    //     case 'increment' :
    //         return state+1;
    //     case 'decrement' :
    //         return state-1;
    //     case 'reset' :
    //         return initialState
    //     default :
    //        return state
    // }

    switch(action.type){
        case 'increment' :
            return {...state,firstCounter: state.firstCounter + action.value};
        case 'decrement' :
            return {...state,firstCounter: state.firstCounter - action.value};
            case 'increment2' :
                return {...state,secondCounter: state.secondCounter + action.value};
            case 'decrement2' :
                return {...state,secondCounter: state.secondCounter - action.value};

        case 'reset' :
            return initialState
        default :
           return state
    }
}


function CounterOne(){
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
    <div>
            <div> Count : {count.firstCounter}</div>
            <div> Count : {count.secondCounter}</div>
            {/* <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button> */}

            {/* <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button> */}
        <div>
            <button onClick={() => dispatch({type:'increment' , value: 1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value:1})}>decrement</button>
            <button onClick={() => dispatch({type:'increment' , value: 5})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value:5})}>decrement</button>
        </div>
        <div>
        <button onClick={() => dispatch({type:'increment2' , value: 1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement2', value:1})}>decrement</button>
            <button onClick={() => dispatch({type:'increment2' , value: 5})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement2', value:5})}>decrement</button>
        </div>
        <div>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    </div>
    )
}


export default CounterOne