export interface IConflict {
  title: string;
  imageUrl: string;
  createdAt: number;
  createdBy: string; // TODO: set to user
  pro: [string]; // TODO: switch to argument
  con: [string]; // TODO: switch to argument
  key?: string; // Optional ID?
}


export class Conflict implements IConflict {
  title: string; // required by input by user
  imageUrl: string; // TODO: set default image url -> random 4 -> user upload
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  createdBy:string;
  pro: [string] = <[string]> [];
  con: [string] = <[string]> [];


  constructor(title: string, imageUrl: string) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  // TODO: add argument (pro / con)
}
