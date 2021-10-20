import React from 'react';
import './display.css';
const Button = (props) => {
    return <button
     value='Create New Item'/>
}
const DisplayRow = ({title, description}) => {
    return(
        <div className='row'>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <input type='checkbox'/>
            <div style={{flexDirection:'row'}}>
            <Button btnName='edit'/>
            <Button btnName='Delect'/>
            </div>
        </div>
    )
}

function NoList(){
    return(
        <div style={{
            justifyContent:'center',
            alignItems:'center',
            
        }}>
            <h3>You have no Item in your Todo List</h3>
            <p>Click the button below to create your first item</p>
            <button value='Create New Item'/>
        </div>
    )
}


function FormDis(props) {
    return (
        <div className='main'>
            {props.TodoItem.length === 0 ? <NoList/> : 
           <DisplayRow title={props.TodoItem.title} description={props.TodoItem.description}/>
            }
        </div>
    );
}

export default FormDis;