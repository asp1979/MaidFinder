
import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "./Shared/api";
import Select from 'react-select';


// const options = [
//   { value: 'blues', label: 'Blues' },
//   { value: 'rock', label: 'Rock' },
//   { value: 'jazz', label: 'Jazz' },
//   { value: 'orchestra', label: 'Orchestra' } 
// ];
let options = this.state.cities.map(function (city) {
  return { value: city.countryCode, label: city.name };
})


function CityDropdown(props){
  return(
    <Select options = {options}  />
  );
}



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

<div className="row justify-content-center">





<div className="card text-dark bg-warning w-50">
  <h5 className="card-header">Candidate Signup</h5>
  <div className="card-body">
    <h5 className="card-title">Enter your information</h5>
    <p className="card-text">Please fill the given form to register yourself as a MaidFinder Candidate</p>
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
                        
<CityDropdown img="microsoft" />


        
        <input type="submit" />






</form>
  </div>
</div>





</div>










    




      
    
  )
 }

