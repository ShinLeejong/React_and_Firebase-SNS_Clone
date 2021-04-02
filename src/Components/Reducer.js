  // In this reducer, state stands for the informations of current user

export const ADD = "ADD";
export const DESTROY = "DESTORY";

const reducer = (state = {}, action) => {

    switch(action.type){
      case ADD:
        state = {state, ...action};
        return state;
      case DESTROY:
        state = {};
        return state;
      default:
        return state;
    };
  };

  export default reducer;