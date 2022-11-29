import React from "react";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Title from "./components/Title";

const Aatrox = () => {
  return (
    <div>
      <Title
      titulo="Old Aatrox"
      />
      <NavBar
      campeones="Campeones"
      runas="Runas"
      objetos="Objetos"
      />
      <ItemListContainer
      masJuegosRiot="Más contenido de Riot Games"
      />
      <CartWidget
      aprender="Quiero aprender a jugar"
      handleOnClick={() => {console.log("El usuario quiere aprender a jugar")}}
      />
    </div>
  )
}

export default Aatrox;