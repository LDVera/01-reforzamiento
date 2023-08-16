import { useState } from 'react';

export const useForm = <T extends Object>( Formulario: T ) => {

  const [State, setState] = useState(Formulario)

  const onChange = ( value: string, campo: keyof T) => {
    setState({
      ...State,
      [campo]: value
    })
  }


  return {
    ...State
    ,State
    ,onChange
  }
}
