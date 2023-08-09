import MongoDBable = AdapterTypes.MongoDBable;
import RedisDBable = AdapterTypes.RedisDBable;
import DataShape = AdapterTypes.DataShape;

export namespace Databases {
  /* Database 1 */
  export class MongoDB implements MongoDBable {
    data: Array<DataShape> = [];

    public insertOne(name: string, value: string): void {
      this.data.push({ name, value });
    }

    public selectOne(name: string): DataShape | null {
      return this.data.find((el: DataShape) => el.name === name) || null;
    }
  }

  /* Database 2 */
  export class RedisDB implements RedisDBable {
    data: Array<DataShape> = [];
    public putOne(name: string, value: string): void {
      this.data.push({ name, value });
    }

    public getOne(name: string): DataShape | null {
      return this.data.find((el: DataShape) => el.name === name) || null;
    }
  }
}
