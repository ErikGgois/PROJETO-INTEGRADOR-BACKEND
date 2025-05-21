import { EVENTOS } from "../Eventos.entity";

export class RetornoEventosDTO{
    constructor(
        readonly status: string,
        readonly eventos: EVENTOS | null
        ){}
}