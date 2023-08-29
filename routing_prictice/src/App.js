import React from "react";
import Home from './components/First'
import NotHome from './components/Second'
import ReallyNotHome from './components/Third'

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <div>
        <h1>Routing Example</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<NotHome />} />
          <Route path="/:word/:col/:backg" element={<ReallyNotHome />} />
        </Routes>
      </div>
  );
}

export default App
