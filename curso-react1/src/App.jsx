import React from "react";

const App = () => {
  let imagen_producto = "TrbaakvbkufSLgX6S-CaldoSinPresa.jpg"
  let nombre_producto = "Caldo de Pollo"
  let description = "Lo mejor de lo mejor! Te lo juro por diegito maradona."

  return (

    

    <div className="container" >
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">THE SOUP!</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Platos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row ">
        <div className="col-md-5 offset-md-2" >
          <img src={imagen_producto} alt={nombre_producto} className="img-fluid" />
        </div>   
        <div className="col-md-4">
          <h1>{nombre_producto}</h1>
          <h3> Especial de la casa </h3>
          <p>{description}</p>
          </div>                             
      </div>
       </div>
  )

}
export default App;


