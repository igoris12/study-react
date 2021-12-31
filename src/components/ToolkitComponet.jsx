import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../redux5/features/counterSlice';

const ToolkitComponet = () => {
  const [amount, setAmount] = useState(2);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const amountHendler = (e) => {
    setAmount(e);
  };

  const amountAddValidation = (value) => {
    const newAmount = Number(value);
    if (isNaN(newAmount)) {
      return;
    }
    dispatch(incrementByAmount(newAmount));
  };

  const amountAddAsyncValidation = (value, DOM) => {
    DOM.target.style.animationName = 'example';
    setTimeout(() => {
      DOM.target.style.animationName = 'none';
    }, 1000);
    const newAmount = Number(value);
    if (isNaN(newAmount)) {
      return;
    }

    dispatch(incrementAsync(newAmount));
  };

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
        <div className="buttonContaner">
          <input
            type="text"
            className="countInput"
            value={amount}
            onChange={(e) => amountHendler(e.target.value)}
          />

          <button
            className="butCount"
            onClick={() => {
              amountAddValidation(amount);
            }}
          >
            add
          </button>

          <button
            className="butCount acync"
            onClick={(e) => {
              amountAddAsyncValidation(amount, e);
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
