import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from './TodoContext'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddList = () => {
  const { addit } = useContext(TodoContext)

  const [addtodo, setaddtodo] = useState(
    {
      description: '',
      ischecked: false
    })

  const handleinput = (e) => {
    setaddtodo({
      ...addtodo, description: e.target.value
    })
  }
  


  return (
    <div className='m-5'>

      <label className='fs-2 p-2 '> add input :  </label>
      <input className='fs-3 ' type='text' name='description' onChange={handleinput}></input>
      <button className='fs-3 m-2  glow-on-hover' onClick={()=>addit(addtodo)} >add</button>
    </div>
  )
}




export default AddList