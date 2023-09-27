import { Response, Request } from "express";
import validateCSVFormat from "../utils/validateCSVFile";
import { UploadFileService } from "../services/uploadFileService";

export class UploadFileController {
    public async validatingFormat(request: Request, response: Response): Promise<Response> {
        try {
            const { file } = request;
            const { buffer } = file as any;

            if (!file) {
                return response.status(400).json({ error: 'Please provide a valid CSV file.' });
            }

            if (!validateCSVFormat(file)) {
                return response.status(400).json({ error: 'Invalid file format. Please upload a CSV file.' });
            }

            const data = await new UploadFileService().formatData(buffer);
            return response.status(200).json({ message: 'CSV upload successfully!', data });
        } catch (error) {
            console.error('Error processing CSV file:', error);
            return response.status(500).json({ error: 'Internal server error.' });
        }
    }
}
