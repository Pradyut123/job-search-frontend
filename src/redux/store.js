import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  createAjobReducer,
  loadJobReducer,
  loadJobSingleReducer,
} from "./reducers/JobReducer";
import {
  createJobTypeReducer,
  loadJobTypeReducer,
} from "./reducers/jobTypeReducer";
import {
  userApplyJobReducer,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
} from "./reducers/userReducer";

//combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  userJobApplication: userApplyJobReducer,
  createJob: createAjobReducer,
  createJobType: createJobTypeReducer,
});

//initial state
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
