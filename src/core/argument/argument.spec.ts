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

import { Argument } from './argument';


describe('Argument', () => {
  let argument: Argument;

  beforeEach(() => {
    argument = new Argument('test');
  });

  it('should set text with provided `text` param', () => {
    expect(argument.text).toBe('test');
  });

  it('should set `createdAt` to firebase timestamp placeholder', () => {
    expect(argument.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
  });
});
