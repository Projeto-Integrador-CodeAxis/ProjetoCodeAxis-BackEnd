import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}