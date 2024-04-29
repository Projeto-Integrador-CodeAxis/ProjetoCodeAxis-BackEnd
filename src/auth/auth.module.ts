import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt"
import { UsuarioModule } from "src/usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthController } from "./controllers/auth.controller";
import { LocalStrategy } from "./strategy/local.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule.forRoot({isGlobal: true})],
            useFactory: async (configService: ConfigService) => ({
              secret: configService.get<string>('JWT_SECRET'),
              signOptions: {
                expiresIn: '1h',
              },
            }),
            inject: [ConfigService],
          }),
        ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt, JwtModule],
})
export class AuthModule {}