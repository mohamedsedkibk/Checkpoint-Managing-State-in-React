import logo from './logo.svg';
import './App.css';
import {TodoProvider} from './TodoContext'
import TodoList from './TodoList';
import AddList from './AddList';
function App() {
  return (

    <TodoProvider>
<div className="App">
   <AddList/>
   <TodoList/>
  
</div>
    </TodoProvider>

   
  );
}

export default App;
