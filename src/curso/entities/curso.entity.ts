import { IsNotEmpty, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Any } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entities";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'tb_cursos'})
export class Curso{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000})
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    autor: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    link: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    valor: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000})
    imagem: string

    @ApiProperty({
        type: () => Categoria

    })
    @ManyToOne(() => Categoria, (categoria) => categoria.curso, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    @ApiProperty({

        type: () => Usuario
            
    })
    @ManyToOne(() => Usuario, (usuario) => usuario.curso, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}
