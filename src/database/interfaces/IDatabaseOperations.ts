export interface IDatabaseOperations {
    write<T>(obj: T): Promise<boolean>;
    read<T>(id: string): Promise<T>;
}
