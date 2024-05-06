import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Curso } from "../../curso/entities/curso.entity";


@Entity({name: 'tb_categorias'})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    categoria: string;

    @OneToMany(() => Curso, (curso) => curso.categoria)
    curso: Curso[]
}