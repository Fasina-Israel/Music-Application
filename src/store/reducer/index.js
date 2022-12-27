import { combineReducers } from 'redux';

// reducer import
// import customizationReducer from './customizationReducer';
import authenticationReducer from './authenticationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    // customization: customizationReducer,
    authentication: authenticationReducer
});

export default reducer;
