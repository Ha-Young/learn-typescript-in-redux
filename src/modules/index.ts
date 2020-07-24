import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

// 루트 리듀서의 반환값을 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용
export type RootState = ReturnType<typeof rootReducer>;
