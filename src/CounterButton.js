import { useState } from 'react';

function CounterButton(){

    const [counter, setLabel] = useState(0);
    

    // Event handler
    function changeLabel() {
        // change label
        setLabel(counter + 1)

    }

    return(
        <button className= "btn btn-primary" onClick={changeLabel}>Click {counter}</button>
    )
    
}

export default CounterButton;