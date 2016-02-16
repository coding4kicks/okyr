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

import { ArgumentService } from './argument-service';


describe('ArgumentService', () => {
  let firebaseRef;
  let argumentService;

  beforeEach(() => {
    firebaseRef = new Firebase('arguments/github:123');
    argumentService = new ArgumentService(firebaseRef);
  });

  describe('Creating a argument', () => {
    it('should push new argument to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().text).toEqual('test');
        done();
      });

      argumentService.createArgument('test', 'test');
      firebaseRef.flush();
    });
  });
});
