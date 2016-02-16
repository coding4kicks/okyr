import { IComment, Comment } from './comment';


export class CommentService {
  constructor(private ref: Firebase) {}

  createComment(title: string, level: number): void {
    this.ref.push(new Comment(title, level), (error: Error) => {
      if (error) {
        console.error('ERROR @ createComment :', error);
      }
    });
  }

  deleteComment(comment: IComment): void {
    this.ref.child(comment.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteComment :', error);
      }
    });
  }

  updateComment(comment: IComment, changes: any): void {
    this.ref.child(comment.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateComment :', error);
      }
    });
  }
}
