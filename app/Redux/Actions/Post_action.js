import {  Get_Post,Post_Success,Post_Failure ,Get_Comments,Comments_Success,Comments_Failure} from '../types';
import { ApiConfig } from '../../service/Api';
import { BaseUrl, getPostUrl, getCommentsUrl} from '../../service/ApiConfig';

export function getPosts() {
    return async (dispatch) => {
        dispatch({ type: Get_Post })
        new ApiConfig().getJSON(BaseUrl + getPostUrl)
            .then((response) => {
                dispatch({ type: Post_Success, data:response.data })
            }).catch((ERROR) => {
                console.log(ERROR)
                dispatch({ type: Post_Failure })
            })

    }
}

export function getPostDetails(id) {
    return async (dispatch) => {
        dispatch({ type: Get_Comments })
        new ApiConfig().getJSON(BaseUrl + getCommentsUrl+`?postId=${id}`)
            .then((response) => {
                dispatch({ type: Comments_Success, data:response.data })
            }).catch((ERROR) => {
                console.log(ERROR)
                dispatch({ type: Comments_Failure })
            })

    }
}
