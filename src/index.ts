import { IDatabaseOperations } from "./database/interfaces";
import { DatabaseContainer, DATABASETYPES } from "./database/container";
import { ICar } from "./database/interfaces/ICar";
import { injectDabaseService} from "./database/_decorators";

const databaseOne: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mongo");
databaseOne.read<ICar>("car").then((result) => {
    console.log(result);
});

const databaseTwo: IDatabaseOperations = DatabaseContainer.getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, "mysql");
databaseTwo.read<ICar>("car").then((result) => {
    console.log(result);
});

/**
 * inject mongo operations to class
 */
@injectDabaseService("mongo")
class Car {
    private database!: IDatabaseOperations;

    public async read(): Promise<void> {
        const result = await this.database.read<ICar>("car");
        console.log(result);
    }
}

const car = new Car();
car.read();
