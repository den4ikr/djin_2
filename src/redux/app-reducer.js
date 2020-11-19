import { getResults } from "./case-reducer";

const INITILISED_SUCCESS = "INITILISED_SUCCESS";

let initialState = {
    isInitilised: false,
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITILISED_SUCCESS:
            return { ...state, isInitilised: true }
        default:
            return state;
    }
}

export const initilisedSuccess = (isInitilised) => ( { type: INITILISED_SUCCESS, isInitilised } );

export const initiliseApp = () => (dispatch) => {
    let promise = dispatch (getResults ())
    Promise.all ([promise])
        .then ( () => {
            dispatch (initilisedSuccess ())
    } )
}

export default AppReducer;