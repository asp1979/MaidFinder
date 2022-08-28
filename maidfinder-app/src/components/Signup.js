import React, { Component } from "react";
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
    createAPIEndpoint(ENDPIONTS.CANDIDATE).create({CandidateID:0, FirstName:inputs.FirstName, LastName:inputs.LastName})
    .then(res => {
    })
    .catch(err => console.log(err));
  }

  
  return (

    <form onSubmit={handleSubmit}>
          <div>
            {inputs.username}</div>
      <label>Enter First Name:
      <input 
        type="text" 
        name="FirstName" 
        value={inputs.FirstName || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Last Name:
      <input 
        type="text" 
        name="LastName" 
        value={inputs.LastName || ""} 
        onChange={handleChange}
      />
        </label>
        <input type="submit" />
    </form>
  )
 }

