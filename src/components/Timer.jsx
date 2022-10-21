import { useState } from "react";

function Timer(){
    const[num, setNum] = useState(0)    // recibe el valor innicial del estado use state valor y funcion setnum para cambiar el estado 

    return (
        <div id="timer" className="container py-3 bg-success text-light"
                onClick={()=>{
            console.log('click');
            setNum(num + 1 );
        }}>
            {num}
        </div>
    );
}

export default Timer;