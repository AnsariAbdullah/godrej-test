import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Publication from './components/publication';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
			<Hero />
			<About />
			<Publication />
			<Footer />
    </div>
  );
}

export default App;
