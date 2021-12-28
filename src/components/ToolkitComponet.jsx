import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../redux5/features/counterSlice';

const ToolkitComponet = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Count</h2>
        <div className="stateContainer">
          <button
            className="butCount"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <h2>{count} </h2>
          <button
            className="butCount"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            className="butCount"
            onClick={() => {
              dispatch(incrementByAmount(5));
            }}
          >
            add 5
          </button>

          <button
            className="butCount"
            onClick={() => {
              dispatch(incrementAsync(10));
            }}
          >
            async
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolkitComponet;
