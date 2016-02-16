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

import { UserService } from './user-service';


describe('UserService', () => {
  let firebaseRef;
  let userService;

  beforeEach(() => {
    firebaseRef = new Firebase('users/github:123');
    userService = new UserService(firebaseRef);
  });

  describe('Creating a user', () => {
    it('should push new user to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().text).toEqual('test');
        done();
      });

      userService.createUser('testId', 'testName', 'testImage');
      firebaseRef.flush();
    });
  });
});
