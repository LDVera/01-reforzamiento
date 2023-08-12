
interface Persona {
  nombreCompleto: string;
  edad:number;
  direccion: Direccion
}

interface Direccion { //* interface secundaria
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Diego'
    ,edad: 25
    ,direccion : {
      pais: 'México'
      ,casaNo: 814
    }
  }

  return (
    <>
      <h3>OBJETOS LITERALES</h3>
      <pre>
        {JSON.stringify(persona, null, 2)}
      </pre>
    </>
  )
}
