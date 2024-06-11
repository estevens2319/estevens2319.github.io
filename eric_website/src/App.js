import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects'
import Home from './home'
import Work from './work'
import Education from './education'
function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
