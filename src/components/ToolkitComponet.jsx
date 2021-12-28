import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux5/features/counterSlice';

const ToolkitComponet = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
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
            add 1
          </button>
          <button
            className="but"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            sub 1
          </button>
          <button
            className="but"
            onClick={() => {
              dispatch(incrementByAmount(5));
            }}
          >
            add 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolkitComponet;
