import { Contador } from "./components/Contador"
import { ContadorConHook } from "./components/ContadorConHook"
import { Login } from "./components/Login"
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
      <Login/>
    </div>
  )
}

export default App