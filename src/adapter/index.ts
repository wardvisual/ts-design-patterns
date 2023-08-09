import { AdapterDatabaseUseCase } from "./use-cases/database";

const adapterExampleUseCase = () => {
  const adapterClient = new AdapterDatabaseUseCase();

  adapterClient.register("root", "pass\n\n");

  adapterClient.login("root");
};

export class App {
  public static run(pattern: string): void {
    if (pattern === "adapter") {
      adapterExampleUseCase();
    }
  }
}
