import { IsNotEmpty, IsEmail, MinLength } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Curso } from "../../curso/entities/curso.entity"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    public senha: string

    @Column({length: 5000 }) 
    public foto: string

    @OneToMany(() => Curso, (curso) => curso.usuario)
    curso: Curso[]

}