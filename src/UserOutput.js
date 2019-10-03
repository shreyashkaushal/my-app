import React from 'react';
import './UserInput';
//import { tsPropertySignature } from '@babel/types';
import UserInput from './UserInput';
import './userOutput.css';

const UserOutput = (props) =>{
    return(
        <div className="userOutput">
            <p>Hey I am {props.name} </p>
            <p>looking for a react developer job</p>
            

        </div>
        
    );
} 
export default UserOutput;  