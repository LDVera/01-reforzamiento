import React from 'react'

export const TiposBasicos = () => {

  const nombre: string = 'Diego';
  const edad: number | string = 35;
  const estadoActivo: boolean = false
  
  const poderes: string[] = []; //'velocidad', 'volar', 'respiracion acuatica'

  
  return (
    <>
      <h3>tipos basicos</h3>
      {nombre}
      <br />
      {poderes.join(', ')}
    </>
  )
}
