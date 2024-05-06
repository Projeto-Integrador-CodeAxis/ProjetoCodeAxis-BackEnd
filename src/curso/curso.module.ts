import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CursoController } from "./controllers/curso.controller";
import { Curso } from "./entities/curso.entity";
import { CursoService } from "./services/curso.service";


@Module({
    imports: [TypeOrmModule.forFeature([Curso])],
    providers: [CursoService],
    controllers: [CursoController],
    exports: [TypeOrmModule]
})
export class CursoModule {}