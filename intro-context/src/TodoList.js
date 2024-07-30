import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import AddCard from './AddCard';

const TodoList = () => {
    const { todos} = useContext(TodoContext);
    

    return (
        <div  className='d-flex  justify-content-around    flex-wrap  align-items-center m-5 '  >
            {
               todos.map((item,i)=>(
                <div key={i} className='p-5 '>
             <AddCard  item={item} />
            
                </div>
               
               )
             
               ) 
            }
        </div>
    )
}

export default TodoList




