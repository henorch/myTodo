import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FormEnt from './Components/FormEntry/FormEnt';
import FormDis from './Components/FormDisplay/FormDis';
import { addTodo } from './Components/FormDisplay/DisplaySlice';
import './App.css';

function Modal(){
  const [formEntry, setFormEntry] = useState({
    title:"",
    description:"",
    completion:false,
})

const dispatch = useDispatch();

const HandleSubmit = e => {
    e.preventDefault()
    console.log({...formEntry});
    dispatch(addTodo({...formEntry}))
}

  return(
    <div>
      <form onSubmit={HandleSubmit}>
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
    </div>
  )
}



function App() {
  /** Define all variable here */
 
  const count = useSelector(state => state.display)
  const totalTodo = count.length;
 
  const [isOpen, setIsOPen] = useState(false);
  /** define some functions here */
const handleModal = (e) => {
  setIsOPen(!isOpen)
}

  return (
    <>
<div className="App">
  
<div style={{background:'green',
justifyContent:'space-between'}}><b style={{fontWeight:'bolder',
fontSize:'1.5em'}}>My Todo Application</b>
<span style={{color:'#fff', 
marginLeft:50,
fontSize:'4em'}}>{totalTodo}</span> Todos
</div>
  <div  className='mainContainer'>
    <div className='ent'>
<FormEnt/>
</div>

<div className='modal'>
{isOpen ? <Modal/>  : null }
</div>



<button 
  onClick={handleModal}
  className='addbtn'style={{position:'absolute',
  width:80,
  height:80,
  borderRadius:'50%',
  bottom:5,
  right:5}} >Add</button>
<FormDis/>
</div>
</div>

    
      </>
  );
}

export default App;
