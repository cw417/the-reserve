import React, { useRef } from 'react'


export default function Homepage({}) {
  
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <div className='title'>Homepage</div>
      <div className='login'>
        <input placeholder='Username' type='text' ref={usernameRef} />
        <input placeholder='Password' type='text' ref={passwordRef} />
      </div>
    </div>
  )
}