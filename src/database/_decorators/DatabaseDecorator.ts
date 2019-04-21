import { IDatabaseOperations } from "../interfaces";
import {DatabaseContainer, DATABASETYPES} from "../container";

function injectDabaseService(type: string) {
    return function inject<T extends new (...args: any[]) => {}>(constructor: T) {
        return class extends constructor {
          // tslint:disable-next-line:member-access
          database: IDatabaseOperations = DatabaseContainer
          .getTagged<IDatabaseOperations>(DATABASETYPES.IDatabaseOperations, DATABASETYPES.DatabaseType, type);
        };
      }
}
export { injectDabaseService};
