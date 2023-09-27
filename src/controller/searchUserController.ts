import { Response, Request } from "express";
import { DataCSV } from "../utils/DataCSV.dto";
import SearchUserService from "../services/searchUserService";

export class SearchUserController {
    public async searchUser(request: Request, response: Response): Promise<Response> {
        const { q } = request.query;
        const errorResponse = new SearchUserController().validateQuery(q);
        if (errorResponse) {
            return response.status(errorResponse.status).json(errorResponse.message);
        }
        const users = await new SearchUserService().filterUsers(String(q));
        const res = new SearchUserController().validateResponse(users, response);
        return res
    }

    public validateQuery(q: any) {
        if (!q) {
            return { status: 400, message: { error: 'Parameter "q" is required.' } };
        }
        return null;
    }

    public validateResponse(users: DataCSV[], response: Response) {
        if (users.length > 0) {
            return response.status(200).json(users);
        } else {
            return response.status(404).json({ message: 'No users found with the provided filter.' });
        }
    }
}





