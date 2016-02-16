import { provide } from 'angular2/core';
import { FIREBASE_COMMENTS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { CommentService } from './comment-service';
import { CommentStore } from './comment-store';


export const COMMENT_PROVIDERS: any[] = [
  provide(CommentService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): CommentService => {
      return new CommentService(new Firebase(`${FIREBASE_COMMENTS_URL}/${auth.id}`));
    }
  }),

  provide(CommentStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): CommentStore => {
      return new CommentStore(new Firebase(`${FIREBASE_COMMENTS_URL}/${auth.id}`));
    }
  })
];
