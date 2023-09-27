import request from 'supertest';
import express from 'express';
import { SearchUserController } from "../controller/searchUserController";

const app = express();

app.get('/api/users/', new SearchUserController().searchUser);

describe('searchUser', () => {
    test('should return users with matching params', async () => {
        const response = await request(app).get('/api/users/?q=John');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    test('should return message for no matching users', async () => {
        const response = await request(app).get('/api/users/?q=123');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No users found with the provided filter.' });
    });

    test('should handle errors', async () => {
        const response = await request(app).get('/api/users');

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Parameter "q" is required.' });
    });
});
