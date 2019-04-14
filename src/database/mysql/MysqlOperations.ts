import {injectable, inject} from "inversify";
import { IDatabaseOperations, IDatabaseConnector } from "../interfaces";
import { DATABASETYPES } from "../container";
@injectable()
class MysqlOperations implements IDatabaseOperations {

    private connector: IDatabaseConnector;

    public constructor(@inject(DATABASETYPES.IDatabaseConnector) connector: IDatabaseConnector) {
        this.connector = connector;
    }


    public async write<T>(obj: T): Promise<boolean> {
        await this.connector.connect();
        // here you would probably write to the database
        await this.connector.disconnect();
        return true;
    }

    public async read<T>(key: string): Promise<T> {
        await this.connector.connect();
         // here you would probably read something from the database
        await this.connector.disconnect();
        return <T>{};
    }
}

export {MysqlOperations};