const initialState = {
    userName: ''
  };
  const rootReducer = (state = initialState, action) => {
      console.log('rootReducer');
      switch (action.type) {
        case "USER_NAME":
            return { ...state, userName: state.userName + action.payload };
      }
      return state;
  };

  export default rootReducer;