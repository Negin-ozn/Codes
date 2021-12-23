import { SET_LIST } from "../action/action";

//---------- Define A state And Put action payload In It --------//

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_LIST: {
      return Object.assign({}, state, {
        list: action.payload
      });
    }

    default:
      return state;
  }
};
