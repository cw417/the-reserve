import React, { useRef } from 'react'
import { useNavigate } from 'react-router';

export default function CreateUser({}) {

  console.log("creating user");

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();

  async function createUser() {
    const newCustomer = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      accounts: {
        chequing: 0,
        savings: 0 
      },
      transactionHistory: []
    }
    
    console.log(`Adding: ${newCustomer.name}`);

    await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    navigate('/');
  }

  return (
    <div>
      <div className='title'>
        <div>Create Account</div>
      </div>
      <div className='create-account-form'>
        <input type='text' ref={nameRef} placeholder='Name'></input>
        <input type='text' ref={emailRef} placeholder='Email'></input>
        <input type='text' ref={passwordRef} placeholder='Password'></input>
        <input type='text' ref={addressRef} placeholder='Address'></input>
        <button type='submit' onSubmit={createUser}>Submit</button>
      </div>
    </div>
  )
}