import { Args, Query, Resolver } from "@nestjs/graphql";
import { FolderEntity } from "../database/entities/folder.entity";
import { FoldersService } from "./folders.service";


@Resolver(() => FolderEntity)

export class FoldersResolver {

    constructor(private readonly foldersService: FoldersService) { }

    @Query(() => [FolderEntity], { name: 'rootFolders' })


    rootFolders(@Args('ownerId', { type: () => String }) ownerId: string): Promise<FolderEntity[]> {

        return this.foldersService.findRootFolders(ownerId)
    }


}