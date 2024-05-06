import { Controller, UseGuards, HttpCode, HttpStatus, Post, Body } from "@nestjs/common";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Usuario')
@Controller("/usuarios")
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user);
    }
}