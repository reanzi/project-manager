const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      // console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      // console.log("signup Failled");
      return {
        ...state,
        authError: action.err.message
      };
    case "LOGIN_ERROR":
      // console.log("Login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      // console.log("Login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      // console.log("Logout Success");
      return state;
    case "SIGNOUT_ERROR":
      // console.log("Unable to logout");
      return {
        ...state,
        authError: "Server Error, Logout Failled"
      };
    default:
      return state;
  }
};

export default authReducer;
