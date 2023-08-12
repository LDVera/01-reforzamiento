import { useState } from "react"


export const useCounter = () => {
  const [Valor, setValor] = useState(0)
  
  const acumular = ( numero: number ) => {
    setValor( Valor + numero)
  }

  return {
    Valor
    ,acumular
  }
}
