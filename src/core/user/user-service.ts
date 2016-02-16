import { IUser, User } from './user';


export class UserService {
  constructor(private ref: Firebase) {}

  createUser(id: string, name: string, image: string): void {
    this.ref.push(new User(id, name, image), (error: Error) => {
      if (error) {
        console.error('ERROR @ createUser :', error);
      }
    });
  }

  deleteUser(user: IUser): void {
    this.ref.child(user.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteUser :', error);
      }
    });
  }

  updateUser(user: IUser, changes: any): void {
    this.ref.child(user.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateUser :', error);
      }
    });
  }
}
