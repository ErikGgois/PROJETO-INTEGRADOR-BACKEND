import * as bcrypt from 'bcrypt';
import { FILES } from 'src/files/files.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

    @Entity()
    export class USUARIO{
        @PrimaryColumn()
        ID: string;
    
        @Column({length: 255})
        NOME: string;
    
        @Column({length: 255})
        IDADE: string;
    
        @Column({length: 255})
        EMAIL: string; 
    
        @Column({length: 255})
        SENHA: string; 
    
        trocaSenha(SENHA){
            const saltOrRounds = 10;
            this.SENHA = bcrypt.hashSync(SENHA,saltOrRounds)
        }
    
        login(SENHA){
            return bcrypt.compareSync(SENHA,this.SENHA);
        }
    }
    