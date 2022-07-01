import './App.css';
import Card from './Components/Card.js';
// import Card2 from './Component/Card2'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = 'App' >
        <Card />
        
      </div>
    </Router>
    
  );
}

export default App;
