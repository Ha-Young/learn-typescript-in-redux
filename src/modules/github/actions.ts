import { createAsyncAction, createAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";
export const GET_GET_GET = "github/GET_GET_GET";

export const getUserProfile = createAction(GET_USER_PROFILE)();
export const getUserProfileSuccess = createAction(
  GET_USER_PROFILE_SUCCESS,
  (payload: GithubProfile) => payload
)();
export const getUserProfileError = createAction(
  GET_USER_PROFILE_ERROR,
  (payload: AxiosError) => payload
)();

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
