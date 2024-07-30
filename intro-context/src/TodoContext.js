import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, description: "Buy groceries" ,ischecked: false},
    { id: 2, description: "Clean the house" ,ischecked: false},
    { id: 3, description: "Walk the dog" ,ischecked:false},
    { id: 4, description: "Pay bills" ,ischecked:false},
    { id: 5, description: "Read a book",ischecked:false },])

   

   
    


const addit=(newTodo)=>{
    setTodos(
        [
            ...todos,{...newTodo,id:uuidv4()}
        ]
    )
}


    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const handlecheck=(id)=>{
        setTodos(todos.map((el,i)=>el.id == id ? {...el,ischecked:!el.ischecked}:el
    ))
    }
  
    return (
        <TodoContext.Provider value={{ todos,deleteTodo,addit,handlecheck}}>
            {children}
        </TodoContext.Provider>
    )
}




export { TodoContext, TodoProvider }