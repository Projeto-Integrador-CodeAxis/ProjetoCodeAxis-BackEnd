import { IsNotEmpty, IsEmail, MinLength } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Curso } from "../../curso/entities/curso.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    public id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false })
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false }) 
    public senha: string

    @Column({length: 5000 }) 
    @ApiProperty()
    public foto: string
    
    @ApiProperty()
    @OneToMany(() => Curso, (curso) => curso.usuario)
    curso: Curso[]

}