import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entities";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Curso } from "src/curso/entities/curso.entity";


@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>

    ){}

    async findAll(): Promise<Categoria[]>{
        return await this.categoriaRepository.find({
            relations: {
                curso: true
            }
        });
        
       
    }

    async findById(id: number): Promise<Categoria>{

        let categoria = await this.categoriaRepository.findOne({
            where:{
                id
            }, relations: {
                curso: true
            }

        });

        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
        
    }

        async findByCategoria(categoria: string): Promise<Categoria[]>{
            return await this.categoriaRepository.find({
                    where:{
                        categoria: ILike(`%${categoria}%`)
                    }, relations: {
                        curso: true
                    }
            })
        }

        async create(categoria: Categoria): Promise<Categoria>{
            return await this.categoriaRepository.save(categoria);
        }
      
        async update(categoria: Categoria): Promise<Categoria>{

            let buscaCategoria: Categoria = await this.findById(categoria.id);

            if (!buscaCategoria || !categoria.id)
                throw new HttpException('Categoria não foi encontrada!', HttpStatus.NOT_FOUND)

            return await this.categoriaRepository.save(categoria);

        }
        
        async delete(id: number): Promise<DeleteResult>{

            let buscaCategoria: Categoria = await this.findById(id);

            if (!buscaCategoria)
                throw new HttpException('Categoria não foi encontrado!', HttpStatus.NOT_FOUND);
            
            return await this.categoriaRepository.delete(id);
        }
}