import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const Formularios = () => {

  const {
    State
    ,email
    ,password
    ,onChange
  } = useForm({
    email: 'test@test.com'
    ,password: 'test'
  })

  return (
    <>
      <h3>formularios</h3>
      <input 
        type="text" 
        id='emaill'
        className="form-control" 
        placeholder="email" 
        onChange={ ({ target }) => onChange( target.value ,'email') }
        value={email}
      />
      <input 
        type="password" 
        id='passwordd'
        className="form-control mt-2 mb-2" 
        placeholder="password" 
        onChange={ ({ target }) => onChange( target.value ,'password') }
        value={password}
      />

      <code>
        <pre>
          {JSON.stringify(State, null, 2)}
        </pre>
      </code>

    </>
  )
}
