
import { useState } from 'react';
import { createAPIEndpoint, ENDPIONTS } from "./Shared/api";


export default function Signup(props) {

  const [inputs, setmyInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setmyInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createAPIEndpoint(ENDPIONTS.CANDIDATE).create({CandidateID:0, FirstName:inputs.FirstName, LastName:inputs.LastName, Address:inputs.Address})
    .then(res => {
    })
    .catch(err => console.log(err));
  }

  
  return (

<div className="row">
{/* https://www.youtube.com/watch?v=ohbF14IK6hI */}
<div className="card card-success w-50">
<div className="card-header">
<h3 className="card-title">Candidate Signup</h3>
</div>
<div className="card-body">

<form onSubmit={handleSubmit}> 
<input className="form-control m-2" type="text" placeholder="FirstName" name="FirstName" 
        value={inputs.FirstName || ""} 
        onChange={handleChange}></input>
<input className="form-control m-2" type="text" placeholder="LastName" name="LastName" 
        value={inputs.LastName || ""} 
        onChange={handleChange}></input>
<input className="form-control m-2" type="textarea" placeholder="Address" name="Address" 
        value={inputs.Address || ""} 
        onChange={handleChange}></input>





        
        <input type="submit" />






</form>

</div>

</div>

</div>










    




      
    
  )
 }

