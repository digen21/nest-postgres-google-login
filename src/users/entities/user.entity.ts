import { Oauthinfo } from 'src/oauthinfo/entities/oauthinfo.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  In,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    primaryKeyConstraintName: 'user_id_pkey',
  })
  id: string;

  @Column('text', {
    name: 'full_name',
    nullable: true,
  })
  fullName?: string;

  @Column('text', {
    name: 'email',
    nullable: false,
  })
  @Unique('uniq_user_email', ['email'])
  @Index('user_email_idx')
  email: string;

  @Column('text', {
    name: 'mobile',
    nullable: true,
  })
  @Index('user_mobile_idx')
  @Unique('uniq_user_mobile', ['mobile'])
  mobile?: string;

  @CreateDateColumn()
  @Index('users_created_at_idx')
  createdAt: Date;

  @UpdateDateColumn()
  @Index('users_updated_at_idx')
  updatedAt: Date;

  @OneToMany(() => Oauthinfo, (oAuthInfo) => oAuthInfo.user)
  oauthInfos: Oauthinfo;
}
