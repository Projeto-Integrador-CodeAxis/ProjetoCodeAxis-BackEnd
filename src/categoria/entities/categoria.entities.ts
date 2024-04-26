import { IsNotEmpty } from "class-validator";
import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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