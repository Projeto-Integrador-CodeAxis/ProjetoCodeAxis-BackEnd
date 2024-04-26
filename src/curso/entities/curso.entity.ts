import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entities";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_cursos'})
export class Curso{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000})
    descricao: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    autor: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    link: string

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    valor: number

    @IsNotEmpty()
    @Column({length: 1000})
    imagem: string

    @ManyToOne(() => Categoria, (categoria) => categoria.curso, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    @ManyToOne(() => Usuario, (usuario) => usuario.curso, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}