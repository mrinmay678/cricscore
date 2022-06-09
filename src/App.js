import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App" id="app">
      <Navbar 
        title="Cricbuzz Clone"
      />
      <Header />
    </div>
  );
}

export default App;
