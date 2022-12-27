// project imports

// action - state management
import * as actionTypes from '../actions';

export const initialState = {
    users:[{
        fullName:'',
        email:'',
        password:''
    }],
    userFound: {}
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authenticationReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.REGISTER: 
        let userArray = [...state.users]
        userArray.push(action.payload)
        const newState = Object.assign({}, state, {users: userArray})
            return newState;

            
        case actionTypes.LOGIN:
            const {email, password} = action.payload;
            const userFound = state.users.find((i)=>{
                if(i.email=== email && i.password=== password){
                    return i;
                }
            })
            if(Object.keys(userFound).length !== 0){
                return {
                    ...state, userFound
                };
            } else{
                return{
                    ...state, userFound: {}
                }
            }

        case actionTypes.LOGOUT:
            return {
                ...state, userFound:{}
                
            };
        default:
            return state;
    }
};

export default authenticationReducer;
