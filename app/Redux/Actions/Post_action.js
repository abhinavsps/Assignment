import {  Get_Post,Post_Success,Post_Failure ,Get_Comments,Comments_Success,Comments_Failure,Get_Delete,Delete_Success,Delete_Failure} from '../types';
import { ApiConfig } from '../../service/Api';
import { BaseUrl, getPostUrl, getCommentsUrl, deleteUrl} from '../../service/ApiConfig';
import NavigationService from '../../NavigationService'

// Get all post
//Params:- N/A
export function getPosts() {
    return async (dispatch) => {
        dispatch({ type: Get_Post })
        new ApiConfig().getJson(BaseUrl + getPostUrl)
            .then((response) => {
                dispatch({ type: Post_Success, data:response.data })
            }).catch((ERROR) => {
                console.log(ERROR)
                dispatch({ type: Post_Failure })
            })

    }
}

// Delete post
//Params:- (ID:number)
export function DeletePost(id) {
    return async (dispatch) => {
        dispatch({ type: Get_Delete })
        new ApiConfig().deleteJson(BaseUrl + deleteUrl + `/${id}`)
            .then((response) => {
                console.log(response.data)
                dispatch({ type: Delete_Success})
                dispatch(getPosts())
                NavigationService.navigate("Posts")
            }).catch((ERROR) => {
                console.log(ERROR)
                dispatch({ type: Delete_Failure })
            })

    }
}

// Get Post comments
//Params:- (ID:number)
export function getPostDetails(id) {
    return async (dispatch) => {
        dispatch({ type: Get_Comments })
        new ApiConfig().getJson(BaseUrl + getCommentsUrl+`?postId=${id}`)
            .then((response) => {
                dispatch({ type: Comments_Success, data:response.data })
            }).catch((ERROR) => {
                console.log(ERROR)
                dispatch({ type: Comments_Failure })
            })

    }
}
