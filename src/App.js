import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Discover from './components/Discover';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Discover/>
    </div>
  );
}

export default App;
