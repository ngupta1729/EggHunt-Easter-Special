import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EggHunt from './pages/EggHunt';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<EggHunt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;