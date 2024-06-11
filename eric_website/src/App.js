import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects'
import Home from './home'
import Work from './work'
import Education from './education'
import Masonsmaze from './masonsmaze';
import Asterix from './asterix';
import DiffieHellman from './diffiehellman';
import WitnessStatementProcessor from './witnessstatements';
import FoodChive from './foodchive';
function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects/Masonsmaze" element={<Masonsmaze />} />
            <Route path="/Projects/Asterix" element={<Asterix />} />                    
            <Route path="/Projects/FoodChive" element={<FoodChive />} />                    
            <Route path="/Projects/DiffieHellman" element={<DiffieHellman />} />                    
            <Route path="/Projects/WitnessStatementProcessor" element={<WitnessStatementProcessor />} />                    
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
