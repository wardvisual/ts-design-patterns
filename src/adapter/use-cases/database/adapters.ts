import { Databases } from "./databases";

import DataShape = AdapterTypes.DataShape;
import Adapterable = AdapterTypes.Adapterable;

export namespace DatabasesAdapters {
  export class MongoDB extends Databases.MongoDB {
    public _putOne(name: string, value: string): void {
      this.insertOne(name, value);
    }

    public _getOne(name: string): DataShape | null {
      return this.selectOne(name);
    }
  }
  export class RedisDB extends Databases.RedisDB {
    public _putOne(name: string, value: string): void {
      this.putOne(name, value);
    }

    public _getOne(name: string): DataShape | null {
      return this.getOne(name);
    }
  }
}

/* Adapter Factory */
export class DatabaseAdapterFactory implements Adapterable {
  adapter: unknown = null;

  static driver: { MYSQL: string; REDIS: string; MONGODB: string } = {
    MYSQL: "MYSQL",
    REDIS: "REDIS",
    MONGODB: "MONGODB",
  };

  constructor(public driver: string) {
    if (driver === DatabaseAdapterFactory.driver.MONGODB) {
      this.adapter = new DatabasesAdapters.MongoDB();
    }
    if (driver === DatabaseAdapterFactory.driver.REDIS) {
      this.adapter = new DatabasesAdapters.RedisDB();
    }

    console.log(`Database Driver: ${driver}`);
  }
}
