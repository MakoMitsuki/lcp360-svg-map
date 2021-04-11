import './App.css';
import { Map } from "./components/Map.js";
import { ReactComponent as PanoskinLogo } from "./data/logo.svg";

function App() {
  
  return (
    <div id="container">
      <div id="header">
        <PanoskinLogo />
      </div>
      <Map />
    </div>

  );
}

export default App;
