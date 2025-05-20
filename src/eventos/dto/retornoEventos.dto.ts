import { EVENTOS } from "../Eventos.entity";

export class RetornoEventosDTO{
    constructor(
        readonly status: string,
        readonly usuario: EVENTOS | null
        ){}
}