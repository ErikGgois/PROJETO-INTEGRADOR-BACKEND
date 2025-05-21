import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class EVENTOS {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  IDCATEGORIA: string;

  @Column({ length: 255 })
  DATA: string;

  @Column({ length: 255 })
  LOCAL: string;

  @Column({ length: 255 })
  QTDPARTICIPANTES: string;

}