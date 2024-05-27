import { combineReducers } from "redux";

import {itemReducer} from './item.reducer'
import {adminReducer} from './admin.reducer'


export const rootReducer = combineReducers(
    {
        itemReducer,adminReducer
    }
)