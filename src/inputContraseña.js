import { useState } from "react";
//import './App.css';

function App() {
    const [isVisible, setIsVisible] = useState(false);
  
    const togglePassword = () => {
      setIsVisible(!isVisible);
    };
  
    //condicion ? "Si es true" : "Si es false"
    return (
      <div className="App">
        <label htmlFor="password">Coloca tu contraseña</label>
        <input type={isVisible ? "text" : "password"} id="password" />
        
        {/* Alternativa para el onClick: */}
        {/* <button onClick={() => setIsVisible(!isVisible)}> */}
  
        <button onClick={togglePassword}>
          {isVisible ? "Ocultar contraseña" : "mostrar contraseña"}
        </button>
      </div>
    );
  }
  
  //export default App;