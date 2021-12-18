import React from 'react';
import Hero from './components/hero';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
			<Hero />
			<Link to="/blogs">Blogs</Link>
    </div>
  );
}

export default App;
