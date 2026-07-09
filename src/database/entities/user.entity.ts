import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType('User')
@Entity({ name: 'users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ type: 'text', unique: true })
  email!: string;

  @Field(()=>String,{ nullable: true })
  @Column({ type: 'text', nullable: true })
  name!: string | null;

  @Column({ name: 'password_hash', type: 'text' })
  passwordHash!: string;

  @Field(()=>String,{ nullable: true })
  @Column({ name: 'photo_url', type: 'text', nullable: true })
  photoUrl!: string | null;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}

