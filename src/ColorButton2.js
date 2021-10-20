import { useState } from 'react';

function ColorButton2() {


    const [label, setLabel] = useState("Blue");
    const [bootstrapClass, setBootstrapClass] = useState("btn btn-primary")

    // Event handler
    function changeColor() {
        // change label
        setLabel("Red")
        // change the class
        setBootstrapClass("btn btn-danger")
    }

    return(
        <button 
        onClick={changeColor} 
        className={bootstrapClass}>{label}</button>
    )
}

export default ColorButton2;