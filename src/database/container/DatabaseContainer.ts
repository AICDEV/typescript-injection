import "reflect-metadata";
import {Container, interfaces} from "inversify";
import { IDatabaseConnector, IDatabaseOperations } from "../interfaces";
import { DATABASETYPES } from "./DatabaseTypes";
import { MongoConnector, MongoOperations } from "../mongo";
import { MysqlConnector, MysqlOperations } from "../mysql";

const DatabaseContainer = new Container();

DatabaseContainer.bind<IDatabaseConnector>(DATABASETYPES.IDatabaseConnector).to(MongoConnector)
.inSingletonScope().whenTargetTagged(DATABASETYPES.DatabaseType, "mongo");

DatabaseContainer.bind<IDatabaseConnector>(DATABASETYPES.IDatabaseConnector).to(MysqlConnector)
.inSingletonScope().whenTargetTagged(DATABASETYPES.DatabaseType, "mysql");

DatabaseContainer.bind<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations).toDynamicValue((context: interfaces.Context) => {
    return new MongoOperations(
        context.container.getTagged(DATABASETYPES.IDatabaseConnector, DATABASETYPES.DatabaseType, "mongo"),
    );
}).whenTargetTagged(DATABASETYPES.DatabaseType, "mongo");

DatabaseContainer.bind<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations).toDynamicValue((context: interfaces.Context) => {
    return new MysqlOperations(
        context.container.getTagged(DATABASETYPES.IDatabaseConnector, DATABASETYPES.DatabaseType, "mysql"),
    );
}).whenTargetTagged(DATABASETYPES.DatabaseType, "mysql");

export {DatabaseContainer};

