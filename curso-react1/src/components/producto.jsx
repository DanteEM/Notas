import { Component } from "react";

class Producto extends Component {
    render() {
        let imagen_producto = "TrbaakvbkufSLgX6S-CaldoSinPresa.jpg"
        let nombre_producto = "Caldo de Pollo"
        let description = "Lo mejor de lo mejor! Te lo juro por diegito maradona."

        
        return (
            <div className="row ">
                <div className="col-md-5 offset-md-2" >
                    <img src={imagen_producto} alt={nombre_producto} className="img-fluid" width="430"/>
                </div>
                <div className="col-md-4">
                    <h1>{nombre_producto}</h1>
                    <h3> Especial de la casa </h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Producto;