import { useState } from 'react';

function ColorButton() {

    const [ className, setClassName ] = useState("btn btn-primary");
    const [ label, setLabel ] = useState("Blue")

    function change() {

        if (className === "btn btn-primary") {
            setClassName("btn btn-danger");
            setLabel("Red");
        } else {
            setClassName("btn btn-primary");
            setLabel("Blue");
        }
    }

    return(
        <button onClick={change} className={className}>{label}</button>
    )
};

export default ColorButton;