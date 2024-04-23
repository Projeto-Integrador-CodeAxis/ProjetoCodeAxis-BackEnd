import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entities";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class UserModule {}