import "reflect-metadata";
import {IDatabaseConnector, IDatabaseOperations} from "../src/database/interfaces";
import {DatabaseContainer, DATABASETYPES} from "../src/database/container";
import { MongoConnector, MongoOperations } from "../src/database/mongo";
import { MysqlConnector, MysqlOperations } from "../src/database/mysql";

describe("test our injection container", () => {

    it("should resolve mongo connector", () => {
        const connector: IDatabaseConnector = DatabaseContainer.getTagged<IDatabaseConnector>(DATABASETYPES.IDatabaseConnector,DATABASETYPES.DatabaseType, "mongo");
        expect(connector).toBeInstanceOf(MongoConnector);
    });

    it("should resolve mysql connector", () => {
        const connector: IDatabaseConnector = DatabaseContainer.getTagged<IDatabaseConnector>(DATABASETYPES.IDatabaseConnector, DATABASETYPES.DatabaseType, "mysql");
        expect(connector).toBeInstanceOf(MysqlConnector);
    });

    it("should resolve mongo operations", () => {
        const operations: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mongo");
        expect(operations).toBeInstanceOf(MongoOperations);
    });

    it("should resolve mysql connector", () => {
        const operations: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mysql");
        expect(operations).toBeInstanceOf(MysqlOperations);
    });
});