import { Controller } from "@nestjs/common";


@ApiTags('eventos')
@Controller('/eventos')
export class EventosController{
    constructor (private cIsEventosArmazenados: EventosArmazenados, private HttpService: Httserv)
}