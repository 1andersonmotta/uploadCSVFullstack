import { UploadFileService } from "../services/uploadFileService";

describe('UploadFileService', () => {
    let uploadFileService: UploadFileService;

    beforeEach(() => {
        uploadFileService = new UploadFileService();
    });

    it('should format data correctly', async () => {
        const buffer = 'John,Doe,USA,Basketball\nAlice,Wonderland,UK,Tennis';
        const expectedData = [
            { name: 'John', city: 'Doe', country: 'USA', favorite_sport: 'Basketball' },
            { name: 'Alice', city: 'Wonderland', country: 'UK', favorite_sport: 'Tennis' }
        ];

        const formattedData = await uploadFileService.formatData(buffer);

        expect(formattedData).toEqual(
            expectedData.map(item => expect.objectContaining(item))
        );
    });

});





