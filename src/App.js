import MainPage from './components/MainPage';
import { Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <h1>aaa</h1>

      <Routes>
        <Route path="/study-react" element={<MainPage />} />

      </Routes>

    </div>
  );
}

export default App;
