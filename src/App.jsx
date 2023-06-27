import "./App.css";
import UserCard from "./components/UserData";
import TitleData from "./components/TitleData";
import phrases from "./data/phrases.json";
import { useState } from "react";
import image1 from "./assets/images/fondo1.png";
import image2 from "./assets/images/fondo2.png";
import image3 from "./assets/images/fondo3.png";
import image4 from "./assets/images/fondo4.png";

function App() {
  const [index, setIndex] = useState(0);

  const images = [image1, image2, image3, image4];
  const backgroundImageStyle = {
    backgroundImage: `url(${images[index]})`,
  };

  const changeUser = () => {
    setIndex(Math.floor(Math.random() * images.length));
  };

  return (
    <div className="Imag" style={backgroundImageStyle}>
      <TitleData></TitleData>
      <UserCard data={phrases[index]} />
      <button onClick={changeUser}>Ver otro</button>
    </div>
  );
}

export default App;


/*
SEGUNDO METODO PARA GENERAR LAS IMAGENES EN EL FONDO
let indexImage = 0;
const cambioImg () => {
let photo = ['url de cada imagen', 'recordar que se importan si estan en assets pero si estan en public solo /fondo1.png es decir directo']
document.body.style = `background-image:url(${photo[indexImage]}`;
}
*/