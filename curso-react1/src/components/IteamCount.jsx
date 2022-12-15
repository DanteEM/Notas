import React from "react";

const IteamCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    return (
        <div className="row">
            <div className="col-md-12">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">{counter}</button>
                    <button type="button" class="btn btn-outline-primary">+</button>
                </div>
                <button type="button" class="btn btn-outline-primary">Agregar a deseados</button>
            </div>
        </div>
    )
}

export default IteamCount