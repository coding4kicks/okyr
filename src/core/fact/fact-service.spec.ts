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

import { FactService } from './fact-service';


describe('FactService', () => {
  let firebaseRef;
  let factService;

  beforeEach(() => {
    firebaseRef = new Firebase('facts/github:123');
    factService = new FactService(firebaseRef);
  });

  describe('Creating a fact', () => {
    it('should push new fact to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().title).toEqual('test');
        done();
      });

      factService.createFact('test', 'test');
      firebaseRef.flush();
    });
  });
});
