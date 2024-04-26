
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entities';
import { Module } from "@nestjs/common";
import { CategoriaModule } from './categoria/categoria.module';
import { ConfigModule } from '@nestjs/config';
import { Curso } from './curso/entities/curso.entity';
import { CursoModule } from './curso/curso.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.PORT),
    username: 'root',
    password: process.env.PASSWORD,
    database: 'db_codeaxis',
    entities: [Categoria, Curso, Usuario],
    synchronize: true
  }),
  CategoriaModule,
  CursoModule,
  UsuarioModule,
  AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
