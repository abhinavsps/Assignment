import React from 'react';
import { Get_Post,Post_Success,Post_Failure} from '../types';

export const Initail_State = {
    hideProgress: false,
    Posts:[],
}

export const PostReducer= (state = Initail_State, action)=> {
    switch (action.type) {
        case Get_Post:
            return { ...state, hideProgress: false }
        case Post_Success:
            return { ...state, hideProgress: true,Posts:action.data}
        case Post_Failure:
            return { ...state, hideProgress: true }
        default:
            return state
    }
}
