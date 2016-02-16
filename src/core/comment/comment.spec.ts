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

import { Comment } from './comment';


describe('Comment', () => {
  let comment: Comment;

  beforeEach(() => {
    comment = new Comment('test', 1);
  });

  it('should set text with provided `text` param', () => {
    expect(comment.text).toBe('test');
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(comment.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
