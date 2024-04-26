
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entities';
import { Module } from "@nestjs/common";
import { CategoriaModule } from './categoria/categoria.module';
import { ConfigModule } from '@nestjs/config';
import { Curso } from './curso/entities/curso.entity';
import { CursoModule } from './curso/curso.module';

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Lana5595',
    database: 'db_codeaxis',
    entities: [Categoria, Curso],
    synchronize: true
  }),
  CategoriaModule,
  CursoModule,
  
],
  controllers: [],
  providers: [],
})
export class AppModule {}
