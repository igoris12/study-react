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
        <h1>Test one count: {count} </h1>
        <div>
          <h2>Count one</h2>
          <button
            className="but"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <button
            className="but"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
          <button
            className="but"
            onClick={() => {
              dispatch(incrementByAmount(5));
            }}
          >
            add 5
          </button>

          <button
            className="but"
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
