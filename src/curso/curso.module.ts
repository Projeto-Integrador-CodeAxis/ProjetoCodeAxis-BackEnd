import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Curso } from "./entities/curso.entity";
import { CursoController } from "./controllers/curso.controller";
import { CursoService } from "./services/curso.service";


@Module({
    imports: [TypeOrmModule.forFeature([Curso])],
    providers: [CursoService],
    controllers: [CursoController],
    exports: [TypeOrmModule]
})
export class CursoModule {}