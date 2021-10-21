import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import FormEnt from './Components/FormEntry/FormEnt';
import FormDis from './Components/FormDisplay/FormDis';

function App() {
  const count = useSelector(state => state.display)
  const totalTodo = count.length;
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
<button  className='addbtn'style={{position:'absolute',
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
