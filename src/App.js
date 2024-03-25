import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nyeow from './nyeow/Nyeow';

function App() {
  return (
    <Router>
        <Link to="/nyeow"></Link>
        <Routes>
          <Route path="/nyeow/*" element={<Nyeow />} />
        </Routes>
    </Router>
  );
}

export default App;
