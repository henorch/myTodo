import React from 'react';
import './display.css';
import { removeTodo } from './DisplaySlice';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';




const DisplayRow = ({id, title, description}) => {
    const RemoveTodo = () =>{
       const dispatch = useDispatch();
        dispatch(removeTodo({id:id}))
    }   
    return(
        <CSSTransition
        classNames='fade-appear'
        timeout={500}>
        <div className='row' key={id}>
            
            <h4>{title}</h4>
            <h5>{description}</h5>
            <input type='checkbox'/>
            <div style={{flexDirection:'row',
            width:100,
            justifyContent:'space-around'}}>
            <FontAwesomeIcon  icon={faEdit} style={{ margin:10}}  size='lg'/>
            <FontAwesomeIcon onClick={RemoveTodo} icon={faTrash} style={{ margin:10}}  size='lg' />
            </div>
        </div>
        </CSSTransition>
    )
}

function NoList(){
    return(
        <div style={{
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center'
            
        }}>
            <h3>You have no Item in your Todo List</h3>
            <p>Click the button below to create your first item</p>
            <button style={{
                width:'200px',
                height:'40px'
            }} 
            placeholder='create Todo'/>
        </div>
    )
}


function FormDis(props) {
    const todoItems = useSelector((state) => state.display)
   
    console.log(todoItems);
    return (
        <div className='main'>
            <TransitionGroup>
                {todoItems.length === 0 ? <NoList/> : <div>
            {todoItems.map((todoItem) => <DisplayRow id={todoItem.id}
                id={todoItem.id} title={todoItem.title} description={todoItem.description}/>
                )
            }
            
             </div>
        }
              </TransitionGroup> 
        </div>
    );
}

export default FormDis;