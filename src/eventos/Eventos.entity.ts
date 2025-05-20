// import * as bcrypt from 'bcrypt';

// export class EventosEntity{
//     id: string;
//     idCategoria: string;
//     data: string;
//     local: string;
//     qtdParticipantes: string;

//     constructor(id: string,idCategoria: string,data: string,local: string,qtdParticipantes: string){
//         const saltOrRounds = 10;

//         this.id = id;
//         this.idCategoria = idCategoria;
//         this.data = data;
//         this.local = local;
//         this.qtdParticipantes = qtdParticipantes;
//     }
// }



import * as bcrypt from 'bcrypt';
import { FILES } from 'src/files/files.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

    @Entity()
    export class EVENTOS{
      login(SENHA: string) {
        throw new Error('Method not implemented.');
      }
      trocaSenha(SENHA: any) {
        throw new Error('Method not implemented.');
      }
        @PrimaryColumn()
        ID: string;
    
        @Column({length: 255})
        IDCATEGORIA: string;
    
        @Column({length: 255})
        DATA: string;
    
        @Column({length: 255})
        LOCAL: string; 
    
        @Column({length: 255})
        QTDPARTICIPANTES: string; 
      NOME: any;
      IDADE: any;
      EMAIL: any;
    
        // trocaSenha(SENHA){
        //     const saltOrRounds = 10;
        //     this.SENHA = bcrypt.hashSync(SENHA,saltOrRounds)
        // }
    
        // login(SENHA){
        //     return bcrypt.compareSync(SENHA,this.SENHA);
        // }  


        // ACREDITO QUE NÃO IRA USAR ESSA FUNÇÃO DE TROCAR SENHA E LOGIN POR SE TRATAR DE UM EVENTO


    }