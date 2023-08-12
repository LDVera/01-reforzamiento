import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {

  const {
    Valor
    ,acumular
  } = useCounter()

  return (
    <>
      <h3>Contador con hook <small>{Valor}</small></h3>
      <button
        className="btn btn-info"
        onClick={() => acumular(1)}
      >+1</button>
      &nbsp;
      <button
        className="btn btn-info"
        onClick={() => acumular(-1)}
      >-1</button>
    </>
  )
}
