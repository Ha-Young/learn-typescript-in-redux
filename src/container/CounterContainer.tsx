import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
  // 상태 조회 할 때에는 state의 타입을 RootState로 지정해야 된다.
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  // 각 액션 디스패치하는 함수
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
