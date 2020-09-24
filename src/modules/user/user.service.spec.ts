import { UserService } from "./user.service"
import { TestingModule, Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "../../models/user.model";
import TestUtil from "../../common/test/TestUtil";
import { NotFoundException } from "@nestjs/common";

describe('UserService', () => {
  let service: UserService;

  const mockRepo = {
    find: jest.fn(),
    findOne: jest.fn(),
    // create: jest.fn(),
    // save: jest.fn(),
    // update: jest.fn(),
    // delete: jest.fn()    
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepo
        }
      ]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  beforeEach(async () => {
    mockRepo.findOne.mockReset();
  });

  it('...', () => {
    expect(service).toBeDefined();
  });

  describe('findAllUsers', () => {
    it('should be list all users', async() => {
      const user = TestUtil.getGiveMeUser();
      mockRepo.find.mockReturnValue([user, user]);
      const users = await service.findAll();
      
      expect(users).toHaveLength(2);
      expect(mockRepo.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByUserId', () => {
    it('should find a existing user', async () => {
      const user = TestUtil.getGiveMeUser();
      mockRepo.findOne.mockReturnValue(user);
      const userFound = await service.findById(1);

      expect(userFound).toMatchObject({ name: user.name });
      expect(mockRepo.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a exception when does not to find a user', async () => {
      mockRepo.findOne.mockReturnValue(null);

      expect(service.findById(0)).rejects.toBeInstanceOf(NotFoundException);
      expect(mockRepo.findOne).toHaveBeenCalledTimes(1);
    });
  });
});