import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { IComment } from './comment';


export class CommentStore {
  comments: ReplaySubject<List<any>> = new ReplaySubject(1);
  private list: List<any> = List();

  constructor(ref: Firebase) {
    ref.on('child_added', this.created.bind(this));
    ref.on('child_changed', this.updated.bind(this));
    ref.on('child_removed', this.deleted.bind(this));
    ref.once('value', () => this.emit());
  }

  get size(): number {
    return this.list.size;
  }

  subscribe(next: (list: List<any>) => void): any {
    return this.comments.subscribe(next);
  }

  private emit(): void {
    this.comments.next(this.list);
  }

  private created(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index === -1) {
      let comment: IComment = snapshot.val();
      comment.key = key;
      this.list = this.list.push(comment);
      this.emit();
    }
  }

  private deleted(snapshot: FirebaseDataSnapshot): void {
    let index: number = this.findIndex(snapshot.key());
    if (index !== -1) {
      this.list = this.list.delete(index);
      this.emit();
    }
  }

  private updated(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index !== -1) {
      let comment: IComment = snapshot.val();
      comment.key = key;
      this.list = this.list.set(index, comment);
      this.emit();
    }
  }

  private findIndex(key: string): number {
    return this.list.findIndex((comment: IComment) => {
      return comment.key === key;
    });
  }
}
