
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountOneAndTwoTest from './components/CountOneAndTwoTest';

import { actionCreators, actionCreators2 } from './redux/index';
function App() {
  const count = useSelector(state => state.count);
  const count2 = useSelector(state => state.count2);
  const dispatch = useDispatch();
  const { addOne, subOne, ASYNC } = bindActionCreators(actionCreators, dispatch)
  const { addOne2, subOne2, async2 } = bindActionCreators(actionCreators2, dispatch)

  return (
    <div className="App">
      <h1>count one 1:[ {count}]</h1>
      <h1>count one 2:[ {count2}]</h1>

      <div>
        <h2>count1</h2>
        <button onClick={() => addOne()}>Add 1</button>
        <button onClick={() => subOne()}>Sub 1</button>
        <button onClick={() => ASYNC()} >random</button>

      </div>
      <div>
        <h2>count2</h2>
        <button onClick={() => addOne2()}>Add 1</button>
        <button onClick={() => subOne2()}>Sub 1</button>
        <button onClick={() => async2()} >random</button>
      </div>
      <p>Redux testing </p>
      <CountOneAndTwoTest />
    </div>
  );
}

export default App;
