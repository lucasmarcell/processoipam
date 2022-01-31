import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { ICidade, IEstado } from '../store/modules/local/types'



const Localidade: React.FC = () => {
  const [estado, setEstado] = useState<IEstado[]>([])
  const [cidade, setCidade] = useState<ICidade[]>([])
  const [listCidade, setListCidade] = useState('')



  useEffect(() => {
    api.get(`/estados/`)
      .then(response => {
        setEstado(response.data);

      })
  }, [])

  useEffect(() => {
    api.get(`/estados/${listCidade}/municipios`)
      .then(response => {
        setCidade(response.data)

      })
  }, [listCidade])

  return (
    <main>
      <h1>Desafio</h1>
      <select
        onChange={
          (e) => {
            const selectedCidade = e.target.value;
            setListCidade(selectedCidade)
          }
        }
      >
        <option>--Selecione uma Estado--</option>
        {estado.map((findestado) => (

          <option
            key={findestado.id}
            value={findestado.id}
          >
            {findestado.nome}
          </option>
        ))
        }
      </select>
      <br />
      <br />
      <select>
        <option>--Selecione uma Cidade--</option>
        {cidade.map((findcidade) => (
          <option
            key={findcidade.id}
            value={findcidade.id}
          >
            {findcidade.nome}
          </option>


        ))}
      </select>






    </main >
  )
}

export default Localidade