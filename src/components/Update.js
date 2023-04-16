import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'

const Update = () => {
  const a = useContext(CrudContext)
  return (
    <div>
      <h2>Update</h2>
      <form>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text"  className="form-control" id="name" 
      onChange={a.handleOnchangeName} value={a.name} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">Email Address</label>
      <input type="email" className="form-control" id="email" value={a.email} onChange={a.handleOnchangeEmail} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div>
      {/* <div className="mb-3">
      <label htmlFor="date" className="form-label">Date of Birth</label>
      <input type="date" className="form-control" id="date" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
      </div> */}
      <button type="submit" className="btn btn-primary" onClick={a.handleUpdate}>Submit</button>
      </form>
    </div>
  )
}

export default Update
