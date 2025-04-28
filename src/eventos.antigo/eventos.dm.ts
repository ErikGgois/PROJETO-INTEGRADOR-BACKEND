import { Injectable } from "@nestjs/common";
import { EventosEntity } from "./eventos.entity";
import { alteraEventosDTO } from "./dto/alteraEventos.dto";

@Injectable()
export class EventosArmazenados{
    deletaEvento(id: string) {
        throw new Error("Method not implemented.");
    }
    
    atualizaEvento(id: string, novosDados: alteraEventosDTO) {
        throw new Error("Method not implemented.");
    }
    #eventos: EventosEntity[] = [];
    
    AdicionarEvento(evento: EventosEntity){
        this.#eventos.push(evento);
    }
    
    get Eventos(){
        return this.#eventos;
    }
    
    async removeEvento(id: string){
        const evento = this.buscaPorID(id);

        this.#eventos = this.#eventos.filter(
            eventoSalvo => eventoSalvo.id !== id
        )

        return evento;
    }


        buscaPorID(id: string){
            const evento = this.#eventos.find(
                eventoSalvo => eventoSalvo.id === id
            )
            return evento;
        }
    
}