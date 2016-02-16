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

import { ConflictService } from './conflict-service';


describe('ConflictService', () => {
  let firebaseRef;
  let conflictService;

  beforeEach(() => {
    firebaseRef = new Firebase('conflict/github:123');
    conflictService = new ConflictService(firebaseRef);
  });

  describe('Creating a task', () => {
    it('should push new task to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().title).toEqual('test');
        done();
      });

      conflictService.createTask('test');
      firebaseRef.flush();
    });
  });
});
