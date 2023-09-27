import { DataCSV } from "../utils/DataCSV.dto";
import { client } from "../database/client";

export default class UploadFileRepository {
    public async createUser(dataList: DataCSV[]): Promise<DataCSV[]> {
        const createdDataList: DataCSV[] = [];

        for await (let { name, city, country, favorite_sport } of dataList) {
            try {
                const createdData = await client.cSVData.create({
                    data: {
                        name,
                        city,
                        country,
                        favorite_sport
                    }
                });
                createdDataList.push(createdData);
            } catch (error) {
                console.error('Error creating CSV data:', error);
            }
        }
        return createdDataList;
    }
}