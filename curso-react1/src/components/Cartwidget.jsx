import React from "react";

const CartWidget = () => {
    return(
        <button type="button" className="btn bg-info position-relative">
        <img src="./cart.svg" alt="carrito" width="30"/>
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
        </span>
      </button>

    )
}
export default CartWidget