import axios from "axios";
import {
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_REQUEST,
  CREATE_JOB_SUCCESS,
} from "../constants/jobconstant";
import { toast } from "react-toastify";

export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
      const { data } = await axios.get(
        `/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );
      dispatch({
        type: JOB_LOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: JOB_LOAD_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// create job action
export const createAjobAction = (job) => async (dispatch) => {
  dispatch({ type: CREATE_JOB_REQUEST });

  try {
    const { data } = await axios.post("/api/job/create", job);
    dispatch({
      type: CREATE_JOB_SUCCESS,
      payload: data,
    });
    toast.success("Job created successfully");
  } catch (error) {
    dispatch({
      type: CREATE_JOB_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};
