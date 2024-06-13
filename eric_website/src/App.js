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
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>

  );
}

export default App;
