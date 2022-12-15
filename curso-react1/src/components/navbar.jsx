import React from "react";
import Header from "./Header";

const Navbar = (props) => {
    
    return (

        
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="kisspng-chicken-soup-tomato-soup-vegetable-soup-clip-art-stewed-clipart-5adda803724f29.9995506215244759074682.png" alt="Sopita"
          width="80"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Casa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Platos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.nombre}</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar