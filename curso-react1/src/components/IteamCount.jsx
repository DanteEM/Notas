import React from "react";
import { useState } from "react";

const IteamCount = ({ stock }) => {

    const [counter, setCounter] = useState(1);
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }

    }

    const incrementaStock = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const agregoCarrito = () => {
        console.log("Agregó " + counter + " al carrtio")
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col-md-2 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementaStock}>+</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="col-md-2 text-center">
                    <button type="button" className="btn btn-outline-primary" onClick={agregoCarrito}>Agregar a deseados</button>
                </div>
            </div>
        </div>
    )
}

export default IteamCount