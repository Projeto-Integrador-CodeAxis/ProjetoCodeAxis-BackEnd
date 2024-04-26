import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class UsuarioModule {}