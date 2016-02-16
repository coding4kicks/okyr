export interface IArgument {
  text: string; // TODO: Limit to 1000 words (client and server validation)
  createdAt: number;
  createdBy: string; // TODO: set user
  facts: [string]; // TODO: switch to facts
  comments: [string]; // TODO: switch to comments
  parentConflict: string; // TODO: switch to conflict
  rating: number;
  key?: string; // Optional ID?
}

export class Argument implements IArgument {
  text: string; // required by input by user
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  createdBy: string;
  facts: [string] = <[string]> [];
  comments: [string] = <[string]> [];
  parentConflict: string;
  rating: number = 5;

  constructor(text: string, parentConflict: string) {
    this.text = text;
    this.parentConflict = parentConflict
  }
}
