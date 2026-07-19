import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FolderEntity } from "../database/entities/folder.entity";
import { IsNull, Repository } from "typeorm";


@Injectable()
export class FoldersService {
    constructor(
        @InjectRepository(FolderEntity)
        private readonly folderRepository: Repository<FolderEntity>,

    ) { }

    //find root folder
    findRootFolders(ownerId: string): Promise<FolderEntity[]> {
        return this.folderRepository.find(
            {
                where: {
                    ownerId, parentId: IsNull()
                },
                order: { name: 'ASC' }
            }
        )
    }
}