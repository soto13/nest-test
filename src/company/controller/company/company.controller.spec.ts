import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';

describe('Company Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CompanyController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CompanyController = module.get<CompanyController>(CompanyController);
    expect(controller).toBeDefined();
  });
});
