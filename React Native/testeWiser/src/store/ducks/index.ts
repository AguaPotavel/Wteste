import { LoginState, LoginTypes } from './types'
import { Reducer } from 'redux'

const initialState: LoginState = {
    data: { submitted: false, isValid: false },
    error: false,
};

const reducer: Reducer<LoginState> = (state = initialState, action) =>{
    switch (action.type){
        case LoginTypes.VALIDATE:
            return {...state, data:action.payload, error:false}
            default:
                return state
        }
};

export default reducer;