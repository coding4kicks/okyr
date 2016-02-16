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

import { User } from './user';


describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User('testId', 'testName', 'testUrl');
  });

  it('should set text with provided `text` param', () => {
    //expect(user.text).toBe('test');
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(user.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
