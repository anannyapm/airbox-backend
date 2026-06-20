import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@ObjectType('Storage')
@Entity({ name: 'storage' })
export class StorageEntity {
  @Field(() => ID)
  @PrimaryColumn({ name: 'user_id', type: 'uuid' })
  userId!: string;

  @Field(() => String)
  @Column({ name: 'used_space', type: 'bigint', default: 0 })
  usedSpace!: string;

  @Field(() => String)
  @Column({ name: 'total_space', type: 'bigint', default: 2147483648 })
  totalSpace!: string;

  @Field(() => Int)
  @Column({ name: 'file_count', type: 'int', default: 0 })
  fileCount!: number;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;
}

