import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../FormDisplay/DisplaySlice';

import './formEntry.css'







function FormEnt({id}) {
    const dispatch = useDispatch();
    const [formEntry, setFormEntry] = useState({
        title:"",
        description:"",
        completion:false,
    })

    const submit = e => {
        e.preventDefault()
        console.log({...formEntry});

        dispatch(addTodo({...formEntry}))
    }

    const remove = () =>{
        dispatch(removeTodo({id: id}))
    }

   // const getValue = e => {
   //     setFormEntry({
   //         ...formEntry,
   //         [e.target.name] : e.target.value
   //     })
   // }

    return (
        <form onSubmit={submit}>
        <div className='formHolder'>
                <div className='Form'>
                    <label htmlFor='title' className='title'><h3>Title</h3></label>
                    <input style={{height:'30px'}} 
                    value={formEntry.title}
                    name='title'
                    onChange={(e) => setFormEntry({
                        ...formEntry,
                        title : e.target.value
                    })}
                    placeholder="TODO TITLE"/>
              
                    <label htmlFor='title' className='title'><h3>Description</h3></label>
                    <input style={{height:'120px',
                    width:'100%'}} 
                    name='description'
                    value={formEntry.description}
                    onChange={(e) => setFormEntry({
                        ...formEntry,
                        description: e.target.value
                    })}
                    placeholder='description'/>
                </div>
                <button>Submit</button>
        </div>
        </form>
    );
}

export default FormEnt;