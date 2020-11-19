import { applyMiddleware, combineReducers, createStore } from "redux";
import CaseReducer from "./case-reducer";
import thunkMiddleware from "redux-thunk";
import BoxReducer from "./box-reducer";
import ChartReducer from "./chart-reducer";
import AppReducer from "./app-reducer";

let reducers = combineReducers ( {
    case: CaseReducer,
    box: BoxReducer,
    chart: ChartReducer,
    app: AppReducer,
} )

let store = createStore (reducers, applyMiddleware (thunkMiddleware));

export default store;