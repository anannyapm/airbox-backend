import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { FolderEntity } from './folder.entity';
import { UserEntity } from './user.entity';

@ObjectType('File')
@Entity({ name: 'files' })
export class FileEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ type: 'text' })
  name!: string;

  @Field()
  @Column({ type: 'text' })
  url!: string;

  @Field(()=> String,{ nullable: true })
  @Column({ name: 'thumbnail_url', type: 'text', nullable: true })
  thumbnailUrl!: string | null;

  @Field()
  @Column({ type: 'bigint' })
  size!: string;

  @Field()
  @Column({ name: 'mime_type', type: 'text' })
  mimeType!: string;

  @Field(() => ID)
  @Column({ name: 'uploaded_by', type: 'uuid' })
  uploadedBy!: string;

  @Field(() => ID, { nullable: true })
  @Column({ name: 'folder_id', type: 'uuid', nullable: true })
  folderId!: string | null;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'uploaded_by' })
  uploader?: UserEntity;

  @ManyToOne(() => FolderEntity, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'folder_id' })
  folder?: FolderEntity | null;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}

