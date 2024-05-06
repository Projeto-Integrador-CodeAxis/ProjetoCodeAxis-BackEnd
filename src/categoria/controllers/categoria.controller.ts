import { UseGuards, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Categoria } from "../entities/categoria.entities";
import { CategoriaService } from "../services/categoria.services";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Categoria')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("/categorias")
export class CategoriaController{

    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.categoriaService.findAll();

    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria>{
        return this.categoriaService.findById(id);

}

    @Get('/categoria/:categoria')
    @HttpCode(HttpStatus.OK)
    findByCategoria(@Param('categoria') categoria: string): Promise<Categoria[]>{
        return this.categoriaService.findByCategoria(categoria);
}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
           return this.categoriaService.delete(id);
    }

}



