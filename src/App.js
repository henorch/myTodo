import logo from './logo.svg';
import './App.css';
import FormEnt from './Components/FormEntry/FormEnt';
import FormDis from './Components/FormDisplay/FormDis';

function App() {
  const [todoList, setTodoList] = ([{
    title:'my expectation',
    description:'To finanlize my expectation very soon'
  }]);
  return (
    <>
<div className="App">
  
<h1>My Todo Application</h1>
  <div  className='mainContainer'>
<FormEnt/>
<FormDis TodoItem={todoList}/>
</div>
</div>

    
      </>
  );
}

export default App;
