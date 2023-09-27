import { Request, Response } from 'express';
import { SearchUserController } from '../controller/searchUserController';
import SearchUserService from '../services/searchUserService';

jest.mock('../services/searchUserService');

const mockFilterUsers = jest.fn();
(SearchUserService as jest.Mock).mockImplementation(() => ({
    filterUsers: mockFilterUsers,
}));

describe('SearchUserController', () => {
    let searchUserController: SearchUserController;
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        searchUserController = new SearchUserController();
        mockRequest = {
            query: {},
        };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    describe('searchUser', () => {
        it('should return error response for missing "q" parameter', async () => {
            const expectedErrorMessage = 'Parameter "q" is required.';
            mockRequest.query = {};

            await searchUserController.searchUser(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
        });

        it('should call filterUsers and return response for valid "q" parameter', async () => {
            const mockUsers = [{ name: 'User 1' }, { name: 'User 2' }];
            const mockQ = 'searchQuery';
            mockRequest.query = { q: mockQ };
            mockFilterUsers.mockReturnValue(mockUsers);

            await searchUserController.searchUser(mockRequest as Request, mockResponse as Response);

            expect(mockFilterUsers).toHaveBeenCalledWith(mockQ);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(mockUsers);
        });
    });

    describe('validateQuery', () => {
        it('should return null for a valid "q" parameter', () => {
            const validQ = 'searchQuery';
            const result = searchUserController.validateQuery(validQ);

            expect(result).toBeNull();
        });

        it('should return error response for missing "q" parameter', () => {
            const expectedErrorMessage = 'Parameter "q" is required.';
            const invalidQ = undefined;

            const result = searchUserController.validateQuery(invalidQ);

            expect(result).toEqual({ status: 400, message: { error: expectedErrorMessage } });
        });
    });

    describe('validateResponse', () => {
        it('should return a 404 response for empty user array', () => {
            const users: any[] = [];
            const expectedResponse = { message: 'No users found with the provided filter.' };

            searchUserController.validateResponse(users, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(404);
            expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);
        });

        it('should return a 200 response for non-empty user array', () => {
            const users = [{ name: 'User 1' }];
            const expectedResponse = users;

            searchUserController.validateResponse(users as any, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);
        });
    });
});
