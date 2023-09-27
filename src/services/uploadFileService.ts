import { Readable } from "stream";
import readLine from "readline"
import { DataCSV } from "../utils/DataCSV.dto"
import UploadFileRepository from '../repositories/uploadFileRepository';

export class UploadFileService {
    public async formatData(buffer: string): Promise<DataCSV[]> {
        const readableFile = new Readable();
        readableFile.push(buffer)
        readableFile.push(null);

        const dataLine = readLine.createInterface({
            input: readableFile
        })
        const data: DataCSV[] = [];

        for await (let line of dataLine) {
            const dataLineSplit = line.split(",")
            data.push({
                name: dataLineSplit[0].replace(/"/g, ''),
                city: dataLineSplit[1].replace(/"/g, ''),
                country: dataLineSplit[2].replace(/"/g, ''),
                favorite_sport: dataLineSplit[3].replace(/"/g, '')
            })
        }
        try {
            const res = await new UploadFileRepository().createUser(data);
            return res;
        } catch (error) {
            throw new Error('Error creating CSV data: ' + error);
        }
    }
}


