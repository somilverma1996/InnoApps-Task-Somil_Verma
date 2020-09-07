import { userService } from '../_services/';
import { history } from '../_helpers';

export const userActions = {
   uploadImages, 
   saveError
};

function uploadImages(payload) {
  return dispatch => {
        let apiEndPoint = "/user/upload";
        userService.post(apiEndPoint, payload)
        .then((response) => {
            console.log(response);
            
            if(response.status == 200) {
                dispatch(saveUserImages(response.data.data.images))
            }else {
                dispatch(saveError(response.data))
            }
        })
    }
}

function saveError(data) {
    return dispatch => {
        dispatch(savedErrorMsg(data))
    }
}

export function savedErrorMsg(data) {
    return {
        data: data,
        type: "SAVED_ERROR_MSG"
    }
}

export function saveUserImages(data) {
    return {
        type: "SAVE_USER_IMAGES",
        data: data
    }
}