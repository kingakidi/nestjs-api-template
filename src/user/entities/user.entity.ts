import { IsEmail } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Roles } from 'src/roles/entities/role.entity';

import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false, default: 1 })
  isActive: boolean;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ManyToOne(() => Roles, (role) => role.id, {
    nullable: false,
  })
  role: Roles;
}
