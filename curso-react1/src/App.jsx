import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IteamListContainer from "./components/IteamListContainer";




const App = () => {
  return (
    <div className="container" >
      <BrowserRouter>
        <Header />
        <IteamListContainer/>
        <Routes>
          <Route exact path="/" element={<Banner />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>


  )

}
export default App;


