import AboutUs from './pages/AboutUs';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
     

  );
}

export default App;
