import { roleProvider } from './role.provider';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
  providers: [RoleService, ...roleProvider],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
