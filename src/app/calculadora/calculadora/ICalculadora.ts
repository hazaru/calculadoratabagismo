import { Status } from "src/app/enums/Status";

export interface ICalculadora {
  id: number,
  descricao: string,
  valor: number,
  status: Status
}
