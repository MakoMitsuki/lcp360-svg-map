import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map } from "./components/Map.js";
import { ReactComponent as PanoskinLogo } from "./data/logo.svg";

function App() {
  
  return (
    <div id="container">
      <div className="header">
        <div className="col-2">
          <PanoskinLogo/>
        </div>
      </div>
      <div className="interactiveContainer">
        <Map />
      </div>
    </div>

  );
}

export default App;
