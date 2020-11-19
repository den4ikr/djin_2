import { API } from "../api/api";

const SET_DATA = "SET_DATA";

let initalState = {
    data: [],
}

const BoxReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export const setData = (data) => ( { type: SET_DATA, data });

export const getCountries = (data) => (dispatch) => {
    return API.getCountries (data)
        .then (response => {
            dispatch (setData (response.data))
        })
}

export default BoxReducer;