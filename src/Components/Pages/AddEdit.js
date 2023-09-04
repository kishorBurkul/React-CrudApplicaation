import React, { useState } from "react";
import './AddEdit.css'
import { toast } from "react-toastify";
import fireDb from "./firebase"

const AddEdit = () =>{
const initialState =[{
    name:"",
    email:"",
    contact:""
}]

// const history = unstable_HistoryRouter()

const [state , setState]=useState([initialState])
const [data , setData] = useState({})

const {name , email , contact} =state

const handleChange =(e)=>{

    const {name , value} =e.target
    setState({...state , [name]:value})

}

const handleSubmit =(e)=>{

    e.preventDefault();
    if(!name || !contact || !email ){
        toast.error("Please Provide all Details")
    } else
    {
        fireDb.child("contact").push(state , (err)=>{
            if(err){
                toast.error(err)
            }else{
                toast.success("Conatact Add Successfully");
            }
        })
    }

    // setTimeout( ()=>history.push("/"),500)
}



    return(<>
    <h1>Add Data</h1>
    <div style={{marginTop:"100px"}}>
  <form onSubmit={handleSubmit} style={{margin:"auto" , padding:"15px" , maxWidth:'400px' , alignContent:"center"}}>
<label>Name</label>
<input type="text" placeholder="Enter your full name " id="name" value={name} name="name" onChange={handleChange} />

<label>Email</label>
<input type="email" placeholder="Enter your Email " id="email" value={email} name="email" onChange={handleChange} />

<label>Contact</label>
<input type="number" placeholder="Enter your Conatact " id="contact" value={contact} name="contact" onChange={handleChange} />
<button type="submit">Save</button>
  </form>

    </div>


    </>)

}
export default AddEdit