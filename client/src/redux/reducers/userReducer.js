const userState = {
  user: [],
  userById: {}
};

const reducer = (state = userState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "user/fetchSuccess":
      return {
        ...state,
        user: payload,
      };
    case "user/fetchSuccessById":
      return {
        ...state,
        userById: payload,
      };

    default:
      return state;
  }
};

export default reducer;