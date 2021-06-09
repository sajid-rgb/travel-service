import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Item from './components/Item';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Travel />
      <Item />
      <Contact />
    </div>
  );
}

export default App;
