import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    usuario: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    senha: string;

    @Column({length: 1000})
    foto: string;

}