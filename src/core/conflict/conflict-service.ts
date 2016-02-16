import { IConflict, Conflict } from './conflict';


export class ConflictService {
  constructor(private ref: Firebase) {}

  createConflict(title: string, imageUrl: string): void {
    this.ref.push(new Conflict(title, imageUrl), (error: Error) => {
      if (error) {
        console.error('ERROR @ createConflict :', error);
      }
    });
  }

  deleteConflict(conflict: IConflict): void {
    this.ref.child(conflict.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteConflict :', error);
      }
    });
  }

  updateConflict(conflict: IConflict, changes: any): void {
    this.ref.child(conflict.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateConflict :', error);
      }
    });
  }
}
