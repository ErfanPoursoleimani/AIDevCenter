
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import Home from './pages/Home';
import TopNavbar from './components/TopNavbar';
import MobileNavbar from './components/MobileNavbar';

function AdvancedApp() {

  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MobileNavbar /> 
    </Router>
  );
}

export default AdvancedApp;