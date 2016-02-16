export interface IComment {
  text: string; // TODO: Limit to 250 words (client and server validation)
  createdAt: number;
  createdBy: string; // TODO: set user
  facts: [string]; // TODO: switch to facts
  comments: [string]; // TODO: switch to comments & Limit to 3 levels deep (ho
  parentArgument?: [string]; // TODO: switch to argument
  parentFact?: [string]; // TODO: switch to fact
  parentComment?: [string]; // TODO: switch to comment
  level: number; // TODO: limit to 3 levels deep - argument/fact is rebutted by 1 comment, then 1 more each.
  rating: number;
  key?: string; // Optional ID?
}


export class Comment implements IComment {
  text: string; // required by input by user
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  createdBy:string;
  facts: [string] = <[string]> [];
  comments: [string] = <[string]> [];
  level: number;
  rating: number = 5;

  constructor(text: string, level: number) {
    this.text = text;
    this.level = level;
  }

  // TODO: set created by, add facts, add comments, change rating, set parent
}
