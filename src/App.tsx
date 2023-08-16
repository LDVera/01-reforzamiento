import { Contador } from "./components/Contador"
import { ContadorConHook } from "./components/ContadorConHook"
import { Formularios } from "./components/Formularios"
import { Login } from "./components/Login"
import { Usuarios } from "./components/Usuarios"
import { Funciones } from "./TypeScript/Funciones"
import { ObjetosLiterales } from "./TypeScript/ObjetosLiterales"
import { TiposBasicos } from "./TypeScript/TiposBasicos"

export const App = () => {
  return (
    <div className='mt-2'>

      <h1>INTRODUCCION A TS - REACT</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}

export default App