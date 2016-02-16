import { enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from 'components/app/app';

// core
import { AUTH_PROVIDERS } from 'core/auth/providers';
import { USER_PROVIDERS } from 'core/user/providers';
import { CONFLICT_PROVIDERS } from 'core/conflict/providers';
import { ARGUMENT_PROVIDERS } from 'core/argument/providers';
import { FACT_PROVIDERS } from 'core/fact/providers';
import { COMMENT_PROVIDERS } from 'core/comment/providers';
import { TASK_PROVIDERS } from 'core/task/providers';




// global styles
import './styles/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  USER_PROVIDERS,
  CONFLICT_PROVIDERS,
  ARGUMENT_PROVIDERS,
  FACT_PROVIDERS,
  COMMENT_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
