import {injectable } from "inversify";
import { IDatabaseConnector } from "../interfaces";

@injectable()
class MysqlConnector implements IDatabaseConnector {

    public async connect(): Promise<void> {
        await this.createConnection();
        return;
    }

    public async disconnect(): Promise<void> {
        return;
    }

    private async createConnection(): Promise<boolean> {
        return await true;
    }
}

export {MysqlConnector};