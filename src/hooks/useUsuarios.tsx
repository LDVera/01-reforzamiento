import { useEffect, useState, useRef } from 'react';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { reqRestApi } from '../api/reqRes';

export const useUsuarios = () => {

  const [Usuarios, setUsuarios] = useState<Usuario[]>([])
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const response = await reqRestApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })
    
    if (response.data.data.length > 0) {
      setUsuarios(response.data.data)  
    }else {
      alert('no hay mas paginas')
    }
  }


  const renderItem = ( usuario: Usuario ) => {
    return(
      <tr key={usuario.id}>
        <td>
          <img src={usuario.avatar} alt={usuario.first_name} style={{
            width: 35,
            borderRadius: 100
          }}/>
        </td>
        <td>{usuario.last_name}</td>
        <td>{usuario.email}</td>
      </tr>
    )
  }

  const pagSiguiente = () => {
    paginaRef.current ++
    cargarUsuarios()
  }

  const pagAnterior = () => {
    if(paginaRef.current >= 1){
      paginaRef.current --
      cargarUsuarios()
    }
  }

  return {
    Usuarios
    ,pagSiguiente
    ,pagAnterior
    ,renderItem
  }
}
