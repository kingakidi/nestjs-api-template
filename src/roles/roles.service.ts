import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './entities/role.entity';
@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  create(createRoleDto: CreateRoleDto): Promise<Roles> {
    return this.rolesRepository.save(createRoleDto);
  }

  findAll(): Promise<Roles[]> {
    return this.rolesRepository.find();
  }

  findOne(id: number): Promise<Roles> {
    return this.rolesRepository.findOneBy({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.update(id, updateRoleDto);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
