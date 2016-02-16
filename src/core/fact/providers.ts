import { provide } from 'angular2/core';
import { FIREBASE_FACTS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { FactService } from './fact-service';
import { FactStore } from './fact-store';


export const FACT_PROVIDERS: any[] = [
  provide(FactService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): FactService => {
      return new FactService(new Firebase(`${FIREBASE_FACTS_URL}/${auth.id}`));
    }
  }),

  provide(FactStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): FactStore => {
      return new FactStore(new Firebase(`${FIREBASE_FACTS_URL}/${auth.id}`));
    }
  })
];
