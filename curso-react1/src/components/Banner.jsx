import React from "react";

const Banner = () => {
    return(
        <div className="container">
            <div className="row gx-10 d-flex justify-content-center">
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="Una de las versiones de la sopa Maruchan es la que quitarían del mercado.png" width="620" className="img-fluid"/></p>
                    <p>Por comprar tres caldos de pollo te llevas una maruchan!</p>
                    <p><button className="btn bg-danger text-light">Saber mas!</button></p>
                </div>
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded ">
                    <p><img src="sopa-maruchan-receta-casera-y-saludable.jpg" width="620" className="img-fluid"/></p>
                    <p>Por navidad varios de nuestros platos estan con gran descuento!</p>
                    <p><button className="btn bg-danger text-light">Saber mas!</button></p>
                </div>
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded ">
                    <p><img src="cocinillas_170994703_116270236_1706x960.jpg" width="620" className="img-fluid"/></p>
                    <p>Prueba nuestros platos extrangeros!!</p>
                    <p><button className="btn bg-danger text-light">Saber mas!</button></p>
                </div>
            </div>
        </div>

        
    )
}

export default Banner;