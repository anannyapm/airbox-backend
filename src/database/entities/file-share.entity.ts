import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { FileEntity } from './file.entity';
import { UserEntity } from './user.entity';

@ObjectType('FileShare')
@Entity({ name: 'file_shares' })
export class FileShareEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => ID)
  @Column({ name: 'file_id', type: 'uuid' })
  fileId!: string;

  @Field(() => ID)
  @Column({ name: 'shared_by', type: 'uuid' })
  sharedBy!: string;

  @Field({ nullable: true })
  @Column({ name: 'shared_with', type: 'text', nullable: true })
  sharedWith!: string | null;

  @Field()
  @Column({ type: 'text' })
  permission!: 'read' | 'write';

  @Field({ nullable: true })
  @Column({ name: 'link_token', type: 'text', nullable: true, unique: true })
  linkToken!: string | null;

  @Field()
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive!: boolean;

  @Field({ nullable: true })
  @Column({ name: 'expires_at', type: 'timestamptz', nullable: true })
  expiresAt!: Date | null;

  @ManyToOne(() => FileEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'file_id' })
  file?: FileEntity;

  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'shared_by' })
  owner?: UserEntity;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;
}

