import { DataCSV } from "../utils/DataCSV.dto";
import { client } from "../database/client";

export default class SearchUserRepository {
    public async filterUser(value: string): Promise<DataCSV[]> {
        const sanitizedValue = `%${value}%`;

        const users = await client.cSVData.findMany({
            where: {
                OR: [
                    { id: { contains: sanitizedValue } },
                    { name: { contains: sanitizedValue } },
                    { city: { contains: sanitizedValue } },
                    { country: { contains: sanitizedValue } },
                    { favorite_sport: { contains: sanitizedValue } }
                ]
            }
        });

        return users;
    }
}
