import { Module } from '@nestjs/common';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controller/company/company.controller';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
