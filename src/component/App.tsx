import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./NavBar";
import Rutas from './Rutas';

const App: React.FC = () => {
  return (
    <Router>
      
        <div className="App">

        <h1>Aplicación React y Typescript</h1>

        <Navbar/>
        <Rutas/>

        </div>
    </Router>
  );
}

export default App;


