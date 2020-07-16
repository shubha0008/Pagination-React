import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
//import Pagination,{Icon,Dot} from 'react-native-pagination';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) { 
        case 'Fetch_Success':
            return{
                loading: false,
                post: JSON.stringify(action.payload),
                error: ''
            }
        case 'Fetch_Error':
            return{
                loading: false,
                post: {},
                error: 'something went wrong'    
            }
        default:
            return state
    }
}

function DataFechingOne() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
            dispatch({type: 'Fetch_Success', payload: response.data})
        })
        
        .catch(error => {
            dispatch({ type: 'Fetch_Error'})
        })
    }, [])

    return(
        <div>
            {state.loading ? 'Loading' : state.post}
                
            {state.error ? state.error : null}
        </div>
        
    )
}


export default DataFechingOne