import { provide } from 'angular2/core';
import { FIREBASE_CONFLICTS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { ConflictService } from './conflict-service';
import { ConflictStore } from './conflict-store';


export const CONFLICT_PROVIDERS: any[] = [
  provide(ConflictService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): ConflictService => {
      return new ConflictService(new Firebase(`${FIREBASE_CONFLICTS_URL}/${auth.id}`));
    }
  }),

  provide(ConflictStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): ConflictStore => {
      return new ConflictStore(new Firebase(`${FIREBASE_CONFLICTS_URL}/${auth.id}`));
    }
  })
];
