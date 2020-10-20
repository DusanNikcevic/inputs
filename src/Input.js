import React from 'react';


const Input = ({value, handleInput,name})=>{
return(
    <div>
        <input type="text"
               value={value}
               onChange={(event)=>handleInput(name,event.target.value)}
        />
    </div>
    )
}

export default Input;