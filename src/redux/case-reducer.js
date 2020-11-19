import { API } from "../api/api";

const SET_DATA = "SET_RESULTS";

let initialState = {
    data: [],
}

const CaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data };
        default:
            return state;
    }
}

export const setData = (data) => ( { type: SET_DATA, data } );

export const getResults = (results) => (dispatch) => {
    return API.getAll (results)
        .then (response => {
            dispatch ( setData (response.data) )
        })
}

export default CaseReducer;