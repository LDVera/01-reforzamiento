import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { reqRestApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

  const {
    Usuarios
    ,pagSiguiente
    ,pagAnterior
    ,renderItem
  } = useUsuarios()

  return (
    <>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            Usuarios.map( usuario => renderItem(usuario) ) 
          }
        </tbody>
      </table>
      <button
        className='btn btn-primary'
        onClick={pagAnterior}
      >
        Anteriores
      </button>
      
      &nbsp;

      <button
          className='btn btn-primary'
          onClick={pagSiguiente}
      >
        Siguiente
      </button>
    </>
  )
}
