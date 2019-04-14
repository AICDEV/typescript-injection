import { IDatabaseOperations } from "./database/interfaces";
import { DatabaseContainer, DATABASETYPES } from "./database/container";
import { ICar } from "./database/interfaces/ICar";

const databaseOne: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mongo");
databaseOne.read<ICar>("car").then((result) => {
    console.log(result);
});

const databaseTwo: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mysql");
databaseTwo.read<ICar>("car").then((result) => {
    console.log(result);
});

