
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entities';
import { Module } from "@nestjs/common";
import { CategoriaModule } from './categoria/categoria.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()
@Module({ 
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.PORT),
    username: 'root',
    password: process.env.PASSWORD,
    database: 'db_codeaxis',
    entities: [Categoria],
    synchronize: true
  }),
  CategoriaModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
