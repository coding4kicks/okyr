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

import { Conflict } from './conflict';


describe('Conflict', () => {
  let conflict: Conflict;

  beforeEach(() => {
    conflict = new Conflict('test title', 'testUrl');
  });

  it('should set title with provided `title` param', () => {
    expect(conflict.title).toBe('test');
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(conflict.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
