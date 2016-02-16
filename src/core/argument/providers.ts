import { provide } from 'angular2/core';
import { FIREBASE_ARGUMENTS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { ArgumentService } from './argument-service';
import { ArgumentStore } from './argument-store';


export const ARGUMENT_PROVIDERS: any[] = [
  provide(ArgumentService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): ArgumentService => {
      return new ArgumentService(new Firebase(`${FIREBASE_ARGUMENTS_URL}/${auth.id}`));
    }
  }),

  provide(ArgumentStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): ArgumentStore => {
      return new ArgumentStore(new Firebase(`${FIREBASE_ARGUMENTS_URL}/${auth.id}`));
    }
  })
];
