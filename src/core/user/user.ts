export interface IUser {
  id: string; // set auth.id
  name: string;
  image: string;
  createdAt: number;
  conflicts: [string]; // TODO: switch to conflicts
  facts: [string]; // TODO: switch to facts
  comments: [string]; // TODO: switch to comments
  key?: string; // Optional ID?
}

export class User implements IUser {
  id: string; // required by input by user
  name: string;
  image: string;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  conflicts: [string] = <[string]> [];
  facts: [string] = <[string]> [];
  comments: [string] = <[string]> [];

  constructor(id: string, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
