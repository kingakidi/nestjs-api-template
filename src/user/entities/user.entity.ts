import { IsEmail } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
} from 'typeorm';
import { Roles } from 'src/roles/entities/role.entity';
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

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  password: string;

  @ManyToOne((type) => Roles, (role) => role.id)
  role: Roles;
}
