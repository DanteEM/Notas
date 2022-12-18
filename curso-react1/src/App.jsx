import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";




const App = () => {
  return (
    <div className="container" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>


  )

}
export default App;


