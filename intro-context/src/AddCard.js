
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TodoContext} from './TodoContext'
import React, { useContext } from 'react'
const AddCard = ({item}) => {
    const {deleteTodo,handlecheck}= useContext(TodoContext) 


    
  return (
    <div >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='fs-1' >To Do List</Card.Title>
        <Card.Text style={{textDecoration: item.ischecked ? 'line-through': 'none'}}>
      {item.description}
        </Card.Text>
        <input  className='m-3'  style={{width: '30px' ,height: '50px'}} type='checkbox' checked={item.ischecked} onChange={()=>handlecheck(item.id)} ></input>


        <button  variant="primary"    onClick={()=>deleteTodo(item.id)}> delete </button> 
      </Card.Body>
    </Card>
    </div>
  )
}

export default AddCard