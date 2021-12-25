import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actionCreators,
  actionCreators2,
  loginActionCreators,
} from '../redux/index';

const CountOneAndTwoTest = () => {
  const state = useSelector((state) => state);
  const pispatch = useDispatch();

  const { addOne, subOne, ASYNC } = bindActionCreators(
    actionCreators,
    pispatch
  );

  const { addOne2, subOne2, async2 } = bindActionCreators(
    actionCreators2,
    pispatch
  );

  const { logout } = bindActionCreators(loginActionCreators, pispatch);

  return (
    <div className="counterContainer">
      <div>
        <h1>Test one count: {state.count} </h1>
        <div>
          <h2>Count one</h2>
          <button className="but" onClick={() => addOne()}>
            add 1
          </button>
          <button className="but" onClick={() => subOne()}>
            sub 1
          </button>
          <button className="but" onClick={() => ASYNC()}>
            async count 1
          </button>
        </div>
      </div>

      <div>
        <h1>Test two count: {state.count2}</h1>
        <div>
          <h2>Count two</h2>
          <button className="but" onClick={() => addOne2()}>
            add 1
          </button>
          <button className="but" onClick={() => subOne2()}>
            sub 1
          </button>
          <button className="but" onClick={() => async2()}>
            async count 1
          </button>
        </div>
      </div>
      <button className="but" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

export default CountOneAndTwoTest;
