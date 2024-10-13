import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('oauth_info')
export class Oauthinfo {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    primaryKeyConstraintName: 'oauth_info_id_pkey',
  })
  id: string;

  @Column('uuid', {
    name: 'user_id',
    nullable: false,
  })
  @Index('oauth_info_user_id_idx')
  userId: string;

  @Column('text', {
    name: 'provider',
    nullable: false,
  })
  @Index('oauth_info_provider_idx')
  provider: string;

  @Column('text', {
    name: 'provider_id',
    nullable: false,
  })
  @Index('oauth_info_provider_id_idx')
  providerId: string;

  @Column('text', {
    name: 'access_token',
    nullable: false,
  })
  accessToken: string;

  @Column('text', {
    name: 'refresh_token',
    nullable: false,
  })
  refreshToken: string;

  @Column('timestamptz', {
    name: 'expires_at',
    nullable: true,
  })
  expiresAt?: Date;

  @CreateDateColumn()
  @Index('oauth_info_created_at_idx')
  createdAt: Date;

  @UpdateDateColumn()
  @Index('oauth_info_updated_at_idx')
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.oauthInfos, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    foreignKeyConstraintName: 'oauth_info_user_id_fkey',
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;
}
