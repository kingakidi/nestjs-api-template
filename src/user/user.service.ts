import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UserService {
  constructor(
    private roleService: RolesService,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto, roleId: number): Promise<Users> {
    const roles = await this.roleService.findOne(roleId);

    const user = this.usersRepository.create({
      ...createUserDto,
      role: roles,
    });

    return this.usersRepository.save(user);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
