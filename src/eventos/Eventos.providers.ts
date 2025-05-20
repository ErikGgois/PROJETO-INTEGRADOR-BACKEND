import { DataSource } from 'typeorm';
import { EVENTOS } from '../eventos/Eventos.entity';

export const eventosProviders = [
  {
    provide: 'EVENTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(EVENTOS),
    inject: ['DATA_SOURCE'],
  },
];