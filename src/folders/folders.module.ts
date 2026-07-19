import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FolderEntity } from "../database/entities/folder.entity";
import { FoldersService } from "./folders.service";
import { FoldersResolver } from "./folders.resolver";


@Module({
    imports: [TypeOrmModule.forFeature([FolderEntity])],
    providers: [FoldersResolver, FoldersService]

})

export class FoldersModule { } 