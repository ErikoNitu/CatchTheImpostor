import React, { useState } from "react";
import pic from './assets/images.jpg';

function Component() {

    // folosim setter pt modificarea pozitiei
    const [pos, setPos] = useState({ x: 100, y: 100 });

    const handleClick = (e) => {
        // event-ul
        const x = e.target;

        // calculam x si y maximi in functie de pagina
        const xmax = window.innerWidth - x.offsetWidth;
        const ymax = window.innerHeight - x.offsetHeight;

        // luam x si y (pozitia imaginii) random
        // Math.random() returneaza o valoare random intre 0 si 1
        const xrand = Math.random() * xmax;
        const yrand = Math.random() * ymax;

        // mutam imaginea la pozitia noua
        setPos({ x: xrand, y: yrand });
    };

    const stil = {
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: "150px",
        height: "auto",
        cursor: "pointer",
        transition: "all 0.4s ease",
    }
    

    return (
        <img className = "imag" style = {stil} alt = "nu mere" src = {pic} onClick = {(e) => handleClick(e)}></img>
    );
}

export default Component