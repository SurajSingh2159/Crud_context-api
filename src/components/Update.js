import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CrudContext from '../context/CrudContext'


const Update = () => {
  const a = useContext(CrudContext)
      
      useEffect(()=>{
            a.setId(localStorage.getItem('id'))
            a.setName(localStorage.getItem('name'))
            a.setEmail(localStorage.getItem('email'))
      },[])

      
  return (
    <>
      <h1>Update</h1>
      <form>
<div className="mb-3">
<label htmlFor="name" className="form-label">Name</label>
<input type="text" className="form-control" id="name"
value={a.name}
 onChange={(e)=>{a.setName(e.target.value)}}
  />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
    value={a.email}
    onChange={(e)=>{a.setEmail(e.target.value)}}
     />
  </div>
  <button type="submit" className="btn btn-primary mx-2" 
  onClick={a.handleUpdate}
  >Submit</button>
  <Link to="/read">
  <button  className="btn btn-primary mx-2"
  >Back</button>
  </Link>
</form>
    </>
  )
}

export default Update
