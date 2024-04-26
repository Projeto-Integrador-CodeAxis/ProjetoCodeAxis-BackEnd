import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository, MoreThan, ILike, DeleteResult } from "typeorm";
import { Curso } from "../entities/curso.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";


@Injectable()
export class CursoService{
    constructor(
        @InjectRepository(Curso)
        private cursoRepository: Repository<Curso>
    ) {}

    async findAll(): Promise<Curso[]>{
    return await this.cursoRepository.find({
        relations: {
            categoria: true
        }
    });

    }

    async findById(id: number): Promise<Curso> {
    let curso = await this.cursoRepository.findOne({
        where: {
            id
            
        }, relations: {
            categoria: true
        }
    });

    if (!curso) {
        throw new HttpException('Curso não encontrado!', HttpStatus.NOT_FOUND);
    }

    return curso;
    
    }

    async findByTitulo(titulo: string): Promise<Curso[]>{
        return await this.cursoRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }, relations: {
                categoria: true
            }
        })

        if (!titulo) {
            throw new HttpException('Titulo não encontrado!', HttpStatus.NOT_FOUND);
        }
    }

    async create(curso: Curso): Promise<Curso> {
        return await this.cursoRepository.save(curso)
    }

    async update(curso: Curso): Promise<Curso> {
        
        let buscaCurso = await this.findById(curso.id);

        if (!buscaCurso || !curso.id)
            throw new HttpException('Curso não encontrado!', HttpStatus.NOT_FOUND)
        
        return await this.cursoRepository.save(curso);
    }

    async delete(id: number): Promise<DeleteResult> {
        let buscaCurso = await this.findById(id);

        if (!buscaCurso)
            throw new HttpException('Curso não encontrado!', HttpStatus.NOT_FOUND)

        return await this.cursoRepository.delete(id);
    } 
} 

    

    