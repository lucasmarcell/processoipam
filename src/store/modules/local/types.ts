export interface IRegiao {
  id: number;
  sigla: string;
  name: string;
}

export interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

export interface IEstadoState {
  estados: IEstado[];
}

export interface IMesorregiao {
  id: string;
  nome: string;
  uf: IEstado[];
}

export interface IMicrorregiao {
  id: number;
  nome: string;
  mesorregiao: IMesorregiao[];
}

export interface ICidade {
  id: number;
  nome: string;
  microrregiao: IMicrorregiao[]
}

export interface ICidadeState {
  cidades: ICidade[];
}