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

import { Fact } from './fact';


describe('Fact', () => {
  let fact: Fact;

  beforeEach(() => {
    fact = new Fact('test', 1);
  });

  it('should set text with provided `text` param', () => {
    expect(fact.text).toBe('test');
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(fact.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
