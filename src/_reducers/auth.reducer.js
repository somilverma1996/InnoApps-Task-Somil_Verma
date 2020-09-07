
let token = '';//localStorage.getItem('token');
let auth = '';//localStorage.getItem('auth');
const initialState = {
  images: [], 
  errorMsg: ""
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER_IMAGES":
      let images = action.data
      console.log(action.data)
      action.data.forEach(element => {
        console.log(element)
      });
      // images.unshift(action.data)
      return {
        ...state,
        images: images
      }
    case "SAVED_ERROR_MSG":
      return{
        ...state,
        errorMsg: action.data
      }
    default:
      return state
  }
}