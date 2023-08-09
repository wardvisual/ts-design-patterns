declare namespace AdapterTypes {
  export interface DataShape {
    name: string;
    value: string;
  }

  export interface MongoDBable {
    data: Array<DataShape>;
    insertOne: (name: string, value: string) => void;
    selectOne: (name: string) => DataShape | null;
  }

  export interface RedisDBable {
    data: Array<DataShape>;
    putOne: (name: string, value: string) => void;
    getOne: (name: string) => DataShape | null;
  }

  export interface Adapterable {
    adapter: unknown;
  }
}
