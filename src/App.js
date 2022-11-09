import './App.css';
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Quiz from './views/Quez';
import Result from './views/Result';

function App() {
  return (
    <div className="App">
      {/* <Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
