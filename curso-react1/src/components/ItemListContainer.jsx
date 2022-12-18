import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/Productos.json"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const IteamListContainer = () => {


    const [items, setItems] = useState([]);
    const { id } = useParams()

    console.log(id);

    useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
                }, 2000)
            });

            promesa.then((data) => {
                setItems(data);
            })
    }, [id]);


    return (
        <div className="container">
            <ItemList items={items} />
            <ItemCount stock={10} />
        </div>
    )
}

export default IteamListContainer