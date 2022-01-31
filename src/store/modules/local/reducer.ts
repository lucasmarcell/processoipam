import { Reducer } from 'redux'
import { IEstadoState } from './types'

const INITIAL_STATE: IEstadoState = {
  estados: []
}

const local: Reducer<IEstadoState> = (reducer, action) => {

  return INITIAL_STATE
}

export default local 