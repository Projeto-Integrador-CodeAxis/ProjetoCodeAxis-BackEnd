import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { CategoriaModule } from "./categoria/categoria.module";
import { CursoModule } from "./curso/curso.module";
import { ProdService } from "./data/services/prod.service";
import { UsuarioModule } from "./usuario/usuario.module";




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    CursoModule,
    CategoriaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}