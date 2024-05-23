import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Hero';
import Skills from './Component/Skills';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
    </Router>
  );
}

export default App;
