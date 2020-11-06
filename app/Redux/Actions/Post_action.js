import {  Get_Post,Post_Success,Post_Failure} from '../types';
import { ApiConfig } from '../../service/Api';
import { BaseUrl, getPostUrl} from '../../service/ApiConfig';

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
