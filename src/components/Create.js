import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'

const Create = () => {

  const a = useContext(CrudContext)
  
  
  return (
    <>
      <h2>Create</h2>
      <form>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text"  className="form-control" id="name" 
      onChange={a.handleOnchangeName} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">Email Address</label>
      <input type="email" className="form-control" id="email" onChange={a.handleOnchangeEmail} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div>
      {/* <div className="mb-3">
      <label htmlFor="date" className="form-label">Date of Birth</label>
      <input type="date" className="form-control" id="date" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div> */}
      <button type="submit" className="btn btn-primary" onClick={a.handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Create
