import React from 'react';

const AuthContext = React.createContext({
    auth: {
        userId: null,
        token: null,
        name: null,
        email: null,
        type: [],
        profile: {}
    },
    // eslint-disable-next-line no-unused-vars
    setAuth: (authObj = {}) => {}
});
export const TraineeDetailsContext = React.createContext({
    trainee: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: ''
    },
    // eslint-disable-next-line no-unused-vars
    updateTraineeDetails: (traineeObj = {}) => {}
});

export const InstitutionInvestorContext = React.createContext();

export default AuthContext;
