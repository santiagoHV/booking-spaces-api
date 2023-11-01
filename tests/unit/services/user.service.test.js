const UserService = require('../../../src/application/services/user.service');
const MockUserRepository = require('../../../src/infrastructure/database/mock/user.repository.mock');

const userRepository = new MockUserRepository();
const service = new UserService(userRepository);

describe('User service', () => {
    describe('When create method is called', () => {
        test('Then should create a user', async () => {
            // Arrange
            const userData = {
                name: 'Test User',
                email: 'test@mail.com',
                password: '123456'
            }

            // Act
            const user = await service.createUser(userData);

            // Assert
            expect(user).toMatchObject(userData);
        }
    )}
)})




