import React from 'react';

const UserInput = (props) =>{
    const design={
        border : '5px red solid'
        

    }
    return(
        <input 
        style={design}
         type='text' onChange={props.change}
            value={props.displayName} 
        />

    );
} 
export default UserInput;  