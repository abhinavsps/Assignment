import React from 'react';
import { Get_Post,Post_Success,Post_Failure,Get_Comments,Comments_Success,Comments_Failure,Get_Delete,Delete_Success,Delete_Failure} from '../types';

export const Initail_State = {
    hideProgress: false,
    Posts:[],
    Comments:[]
}

export const PostReducer= (state = Initail_State, action)=> {
    switch (action.type) {
        case Get_Post:
            return { ...state, hideProgress: false }
        case Post_Success:
            return { ...state, hideProgress: true,Posts:action.data}
        case Post_Failure:
            return { ...state, hideProgress: true }

        case Get_Comments:
            return { ...state, hideProgress: false,Comments:[] }
        case Comments_Success:
            return { ...state, hideProgress: true,Comments:action.data}
        case Comments_Failure:
            return { ...state, hideProgress: true }

        case Get_Delete:
            return { ...state, hideProgress: false }
        case Delete_Success:
            return { ...state, hideProgress: true}
        case Delete_Failure:
            return { ...state, hideProgress: true }
        default:
            return state
    }
}
