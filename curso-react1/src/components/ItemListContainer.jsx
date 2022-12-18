import React from "react";
import { useEffect } from "react";
import arrayProductos from "./json/Productos.json"
import IteamCount from "./ItemCount";
import { useState } from "react";
import IteamList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const IteamListContainer = ({ greeting }) => {
    

    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })

    });


    return (
        <div className="container">
            <IteamList items={items} />
            <IteamCount stock={10} />
        </div>
    )
}

export default IteamListContainer