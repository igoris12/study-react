
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/index';
function App() {
  const count = useSelector(state => state.count);
  const count2 = useSelector(state => state.count2);
  const dispatch = useDispatch();

  const { addOne, subOne, ASYNC } = bindActionCreators(actionCreators, dispatch)

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
        <button onClick={() => addOne()}>Add 1</button>
        <button onClick={() => subOne()}>Sub 1</button>
        <button onClick={() => ASYNC()} >random</button>
      </div>
    </div>
  );
}

export default App;
