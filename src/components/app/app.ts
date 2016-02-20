import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';
import { UserService } from 'core/user/user-service';
import { UserStore } from 'core/user/user-store';
import { SignIn } from '../sign-in/sign-in';
import { Tasks } from '../tasks/tasks';
import { Home } from '../home/home';
import { NewConflict } from '../new-conflict/new-conflict';
import { Conflict } from '../conflict/conflict';
import { Conflicts } from '../conflicts/conflicts';
import { User } from "../../core/user/user";



const styles: string = require('./app.scss');
const template: string = require('./app.html');


@Component({
  directives: [
    RouterOutlet
  ],
  selector: 'app',
  styles: [styles],
  template
})

@RouteConfig([
  {path: '/', component: Home, as: 'Home'},
  {path: '/signin', component: SignIn, as: 'SignIn'},
  {path: '/tasks', component: Tasks, as: 'Tasks'},
  {path: '/new-conflict', component: NewConflict, as: 'NewConflict'},
  {path: '/conflict:id', component: Conflict, as: 'Conflict'},
  {path: '/conflicts', component: Conflicts, as: 'Conflicts'}
])

export class App {
  authenticated: boolean = false;
  user: User;

  constructor(private auth: AuthService, routeHelper: AuthRouteHelper, userService: UserService, userStore: UserStore) {
    // Find user,
    var createUser = function() {
      var name = userService.createUserName();
      auth.signInAnonymously();
      userService.createUser(auth.id, name);
    };

    var subscription = userStore.users.subscribe(
      (userData) => {
        this.user = userData.get(0);
        if (!this.user) {
          console.log('Creating User');
          createUser();
        }
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });

    auth.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  home(): void {
    window.location.replace('/');
  }

  signIn(): void {
    window.location.replace('/signin');
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }

}
