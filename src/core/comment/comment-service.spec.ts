/* tslint:disable:no-unused-variable */
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit
} from 'angular2/testing';
/* tslint:enable:no-unused-variable */

import { CommentService } from './comment-service';


describe('CommentService', () => {
  let firebaseRef;
  let commentService;

  beforeEach(() => {
    firebaseRef = new Firebase('comments/github:123');
    commentService = new CommentService(firebaseRef);
  });

  describe('Creating a comment', () => {
    it('should push new comment to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().title).toEqual('test');
        done();
      });

      commentService.createComment('test', 1);
      firebaseRef.flush();
    });
  });
});
