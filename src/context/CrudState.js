import { useEffect, useState } from "react"
import CrudContext from "./CrudContext"
import axios from "axios"
// import { useNavigate } from "react-router-dom"

const CrudState = (props)=>{
      const [name, setName] = useState("")
     const [email, setEmail] = useState("")
//      const navigate = useNavigate()
      
      const handleOnchangeName=(e)=>{
            setName(e.target.value)
      }
      const handleOnchangeEmail=(e)=>{
            setEmail(e.target.value)
      }

      const handleSubmit= (e)=>{
            e.preventDefault()
            try{
                  axios.post('https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react',{
                  name: name,
                  email: email,
                  headers: {"Access-Control-Allow-Origin": "*"}
            })
            // .then(()=>{
            //       navigate('/read')
            // })
            } catch(err){
                  new Error("Fat gaya")
            }
      }

      const [data, setData] = useState([])
      const getData = ()=>{
            try{
                  axios.get('https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react').then((response)=>{
                  setData(response.data)
                  // console.log(response.data)
                  })
            } catch(err){
                  new Error("Fat gaya")
            }
      }
      useEffect(()=>{
            getData()
            setId(localStorage.getItem('id'))
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
            // console.log(a.getData())
        },[])

      const handleDelete = (id)=>{
            axios.delete(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`).then(()=>{
                  getData()
            })
      }



      const setLocalStorage = (id,name,email)=>{
            localStorage.setItem("id", id)
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
      }

      const[id, setId] = useState("")

      const handleUpdate=(e)=>{
            e.preventDefault()
            axios.put(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`,{
                  name: name,
                  email:email
            })
            // .then(()=>{
            //       navigate("/read")
            // })
      }



      return (
      <CrudContext.Provider value={{handleOnchangeEmail, handleOnchangeName, handleSubmit, data, handleDelete, setLocalStorage, handleUpdate}}>
            {props.children}
      </CrudContext.Provider>
      )
}

export default CrudState;