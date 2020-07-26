import * as action from "./actions";
import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";

export type GithubAction = ActionType<typeof action>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};
