import { API } from "../api/api";

const SET_CASES = "SET_CASES";

let initialState = {
    data: [],
}

const ChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CASES:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export const setData = (data) => ( { type: SET_CASES, data } );

export const getData = (data) => (dispatch) => {
    API.getCases (data)
        .then (response => {
            dispatch ( setData (response.data) )
        })
}

export default ChartReducer;