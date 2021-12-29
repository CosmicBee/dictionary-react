import logo from './logo.svg';
import './App.css';
import Search from "./search"; 


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
        <Search/>
      
   
        <a
          className="App-link"
          href="https://github.com/CosmicBee/dictionary-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    
    </div>
  );
}









