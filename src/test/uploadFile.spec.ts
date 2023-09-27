import request from 'supertest';
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { UploadFileController } from "../controller/uploadFileController";

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/files', upload.single('file'), new UploadFileController().validatingFormat);

describe('File Upload Tests', () => {
    test('should upload a CSV file', async () => {
        const filePath = path.resolve(__dirname, 'file.csv');
        const fileData = fs.readFileSync(filePath);

        const response = await request(app)
            .post('/api/files')
            .attach('file', fileData, 'file.csv');

        expect(response.status).toBe(200);
    });

    test('should reject a non-CSV file', async () => {
        const filePath = path.resolve(__dirname, 'file.txt');
        const fileData = fs.readFileSync(filePath);

        const response = await request(app)
            .post('/api/files')
            .attach('file', fileData, 'file.txt');

        expect(response.status).toBe(400);
    });
});
