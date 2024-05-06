import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Categoria } from "../../categoria/entities/categoria.entities";
import { Curso } from "../../curso/entities/curso.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: "root",
            database: 'db_codeaxis',
            entities: [Curso, Categoria, Usuario],
            synchronize: true,
    };
  }
}