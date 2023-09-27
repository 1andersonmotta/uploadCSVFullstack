import SearchUserRepository from "../repositories/searchUserRepository";
import { DataCSV } from "../utils/DataCSV.dto";

export default class SearchUserService {
    public async filterUsers(value: string): Promise<DataCSV[]> {
        try {
            const users = await new SearchUserRepository().filterUser(value);
            return users;
        } catch (error) {
            console.error('Error filtering users:', error);
            throw new Error('Failed to filter users.');
        }
    }
}

