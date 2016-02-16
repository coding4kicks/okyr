export interface IFact {
  text: string; // TODO: Limit to 250 words (client and server validation)
  url: string;
  location: string; // Location in the parent to regex match the lo
  num: number; // Number of fact
  createdAt: number;
  createdBy: string; // TODO: set user
  comments: [string]; // TODO: switch to comments & Limit to 3 levels deep (ho
  parentArgument?: [string]; // TODO: switch to argument
  parentComment?: [string]; // TODO: switch to comment
  rating: number;
  key?: string; // Optional ID?
}


export class Fact implements IFact {
  text: string; // required by input by user
  url: string; // required by input by user
  location: string;
  num: number;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  createdBy:string;
  comments: [string] = <[string]> [];
  rating: number = 5;

  constructor(text: string, url: string, location: string, num: number) {
    this.text = text;
    this.url = url;
    this.location = location;
    this.num = num;
  }

  // TODO: set created by, add facts, add comments, change rating, set parent
}
