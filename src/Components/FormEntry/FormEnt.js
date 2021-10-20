import React, { useState } from 'react';
import './formEntry.css'

const Form = (props) => {
    return(
    <div className='Form'>
        <label htmlFor='title' className='title'><h1>{props.title}</h1></label>
        <input className='input' placeholder={props.title}/>
    </div>
    )
}

const Button = (props) => {
    return(
        <input type='submit' style={{width:'180px',
    height:'50px',
border:'0px',
backgroundColor:'green',
boxShadow:'2px 2px 2px grey',
borderRadius:5,
margin:20}} value={props.buttonName} width='200'/>
    )
}

function FormEnt(props) {
    const [formEntry, setFormEntry] = useState({
        title:"",
        description:"",
        completion:false,
    })
    return (
        <div className='formHolder'>
            <Form title='TODO TITLE'/>
            <Form title='Description'/>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                width: '380px',
                marginLeft:30,
                fontStyle:'italic',
                padding: '20px',
            }}>
            <label htmlFor='check' className='check'><b>Completed</b></label>
            <input type='checkbox' defaultValue='false'/>

            </div>
            <div style={{
                display:'flex',
                flexDirection:'row'}}>
            <Button disable='true' buttonName='Submit'/>
            
            <Button buttonName='Reset'/>
            </div>
        </div>
    );
}

export default FormEnt;