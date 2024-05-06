import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "../../curso/entities/curso.entity";


@Entity({name: 'tb_categorias'})
export class Categoria {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    categoria: string;

    @ApiProperty()
    @OneToMany(() => Curso, (curso) => curso.categoria)
    curso: Curso[]
}