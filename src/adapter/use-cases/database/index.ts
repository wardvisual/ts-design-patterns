import { DatabaseAdapterFactory } from "./adapters";

export class AdapterDatabaseUseCase {
  db: any;

  constructor() {
    this.db = new DatabaseAdapterFactory(DatabaseAdapterFactory.driver.REDIS);
  }

  public register(name: string, password: string): void {
    this.db.adapter._putOne(name, password);
    console.log("Congrats, you are now registered!");
  }

  public login(name: string) {
    if (!this.db.adapter._getOne(name)) {
      console.log("Invalid username or password");
      return;
    }

    console.log("You are now logged in");
    return;
  }
}
