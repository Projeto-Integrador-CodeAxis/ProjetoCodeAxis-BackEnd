import { UseGuards, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Curso } from "../entities/curso.entity";
import { CursoService } from "../services/curso.service";

@UseGuards(JwtAuthGuard)
@Controller("/cursos")
export class CursoController{
    constructor(private readonly cursoService: CursoService){}
        
    @Get() 
    @HttpCode(HttpStatus.OK)
    findAll():Promise <Curso[]> {
        return this.cursoService.findAll();
    }       
        

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Curso>{
        return this.cursoService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Curso[]>{

        return this.cursoService.findByTitulo(titulo);

    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() curso: Curso ): Promise<Curso>{
        return this.cursoService.create(curso);
    }
    
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() curso: Curso): Promise<Curso> {
        return this.cursoService.update(curso);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.cursoService.delete(id);
    }

}
