import React from "react";
import Navbar from "./components/navbar";
import Producto from "./components/Producto";

const App = () => {
  return ( 
    <div className="container" >
      <Navbar nombre={"Contacto"} />
      <Producto/>
    </div>
  )

}
export default App;


