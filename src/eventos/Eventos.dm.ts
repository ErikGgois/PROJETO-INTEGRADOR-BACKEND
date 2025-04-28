import { Injectable } from "@nestjs/common";
import { EventosEntity } from "./Eventos.entity";

@Injectable()
export class EventosArmazenados{
    #Eventos: EventosEntity[] = [];  

    AdicionarEventos(Eventos: EventosEntity){
        this.#Eventos.push(Eventos);
    }

    get Eventos(){        
        return this.#Eventos;
    }

    async removeEventos(id: string){
        const Eventos = this.buscaPorID(id);

        this.#Eventos = this.#Eventos.filter(
            EventosSalvo => EventosSalvo.id !== id
        )

        return Eventos;
    }


    atualizaEventos(id: string, dadosAtualizacao: Partial<EventosEntity>){
        const Eventos = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if (valor === undefined){
                    return
                }
                if(chave === 'id'){
                    return
                }else if(chave === 'senha'){
                    Eventos.trocarSenha(valor);
                    return
                }
                

                Eventos[chave] = valor;
            }
        )

        return Eventos;
    }

    private buscaPorID(id: string){
        const possivelEventos =     this.#Eventos.find(
            EventosSalvo => EventosSalvo.id === id
        )

        if (!possivelEventos){
            throw new Error('Evento nao encontrado')
        }
        
        return possivelEventos;
    }

}