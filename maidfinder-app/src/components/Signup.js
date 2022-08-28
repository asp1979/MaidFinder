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
    createAPIEndpoint(ENDPIONTS.FOODITEM).create({fooditemId:0, fooditemname:inputs.username, price:inputs.age})
    .then(res => {
    })
    .catch(err => console.log(err));
  }

  
  return (

    <form onSubmit={handleSubmit}>
          <div>
            {inputs.username}</div>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
 }

