import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { validateEnv } from './common/config/env.validation';
import { UserEntity } from './database/entities/user.entity';
import { FolderEntity } from './database/entities/folder.entity';
import { FileEntity } from './database/entities/file.entity';
import { FileShareEntity } from './database/entities/file-share.entity';
import { StorageEntity } from './database/entities/storage.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: true,
        sortSchema: true,
        introspection: true,
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.getOrThrow<string>('DATABASE_URL'),
        entities: [UserEntity, FolderEntity, FileEntity, FileShareEntity, StorageEntity],
        synchronize: false,
        logging: false,
      }),
    }),
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}
