import {injectable} from "inversify";
import { IDatabaseConnector } from "../interfaces";

@injectable()
class MongoConnector implements IDatabaseConnector {
    public async connect(): Promise<void> {
        await this.createConnection();
        return;
    }

    public async disconnect(): Promise<void> {
        return;
    }

    private async createConnection(): Promise<boolean> {
        // here can you check for e.g. open connections and so on...
        return await true;
    }
}

export {MongoConnector};