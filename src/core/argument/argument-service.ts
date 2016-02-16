import { IArgument, Argument } from './argument';


export class ArgumentService {
  constructor(private ref: Firebase) {}

  createArgument(text: string, conflict: string): void {
    this.ref.push(new Argument(text, conflict), (error: Error) => {
      if (error) {
        console.error('ERROR @ createArgument :', error);
      }
    });
  }

  deleteArgument(argument: IArgument): void {
    this.ref.child(argument.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteArgument :', error);
      }
    });
  }

  updateArgument(argument: IArgument, changes: any): void {
    this.ref.child(argument.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateArgument :', error);
      }
    });
  }
}
