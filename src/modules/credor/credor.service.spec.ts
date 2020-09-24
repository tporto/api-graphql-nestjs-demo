import { CredorService } from "./credor.service";
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Credor } from "../../models/credor.model";
import TestUtil from "../../common/test/TestUtil";
import { NotFoundException } from "@nestjs/common";

describe('CredorService', () => {
  let service: CredorService;

  const mockRepo = {
    find: jest.fn(),
    findOne: jest.fn()    
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CredorService,
        {
          provide: getRepositoryToken(Credor),
          useValue: mockRepo
        }
      ]
    }).compile();

    service = module.get<CredorService>(CredorService);
  });

  beforeEach(async () => {
    mockRepo.find.mockReset();
    mockRepo.findOne.mockReset();
  });

  it('init service', () => {
    expect(service).toBeDefined();
  });

  describe('findAllCredor', () => {
    it('should be list all credores', async () => {
      const credor = TestUtil.getFirstCredor();
      mockRepo.find.mockReturnValue([credor, credor]);      
      const credores = await service.findAll();

      expect(credores).not.toBeNull();
      expect(credores).toHaveLength(2);
      expect(credores).not.toBeNaN();
    });
  });

  describe('findByCredorId', () => {
    it('should find a existing credor', async () => {
      const credor = TestUtil.getFirstCredor();
      mockRepo.findOne.mockReturnValue(credor);
      const credorFound = await service.findById(1);

      expect(credorFound).toMatchObject({ fantasia: credor.fantasia });
      expect(mockRepo.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a exception when does not to find a credor', async () => {
      mockRepo.findOne.mockReturnValue(null);

      expect(service.findById(0)).rejects.toBeInstanceOf(NotFoundException);
      expect(mockRepo.findOne).toHaveBeenCalledTimes(1);
    });
  });
})