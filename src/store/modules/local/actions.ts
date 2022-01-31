import { IEstado } from "./types";

export function listCidades(estado: IEstado) {
  return {
    type: 'LIST_CIDADES',
    payload: {
      estado,
    }
  }
}