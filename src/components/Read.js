import React, { useContext} from 'react'
import CrudContext from '../context/CrudContext'
import {Link} from 'react-router-dom'

const Read = () => {
  const a = useContext(CrudContext)
  // const gatherData = async()=>{
  //   let data1 = await a.data
  //   console.log(data1)
  // }
  // gatherData()
  
  return (
    <>
    <h2> Read </h2>
        <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      {a.data.map((value)=>{
        return <tbody key={value.key}>
        <tr>
          <th scope="row">{value.id}</th>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td><Link to='/update'><button className="btn-primary" onClick={()=>{a.setLocalStorage(value.id,value.name,value.email)}}>Edit</button></Link></td>
          <td><button className="btn-danger" onClick={()=>{a.handleDelete(value.id)}}>Delete</button></td>
        </tr>
      </tbody>
      })}
      
    </table>
    </>
  )
}

export default Read
