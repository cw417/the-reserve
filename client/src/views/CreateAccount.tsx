import React, { useRef } from 'react'

type Props = {}

export default function CreateAccount({}: Props) {

  // declaring ref's as type "any" to avoid type conflicts
  const nameRef: any = useRef();
  const passwordRef: any = useRef();

  return (
    <div>
      <div className='title'>
        <div>Create Account</div>
      </div>
      <div className='create-account-form'>
        <input type='text' ref={nameRef} placeholder=''></input>
        <input type='text' ref={passwordRef} placeholder=''></input>
      </div>
    </div>
  )
}