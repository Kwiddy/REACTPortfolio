import './App.scss';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import MainHeader from './components/MainHeader';

// https://v5.reactrouter.com/web/example/basic <- simple react router example

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
