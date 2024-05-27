import { combineReducers } from "redux";

import {adminReducer} from './admin.reducer'
import {itemReducer} from './item.reducer'


export const rootReducer = combineReducers(
    {
        adminReducer,
        itemReducer
    }
)