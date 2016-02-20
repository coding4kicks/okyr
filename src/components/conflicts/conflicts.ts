import { Component } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';

const styles: string = require('./conflicts.scss');
const template: string = require('./conflicts.html');


@Component({
  selector: 'conflicts',
  styles: [styles],
  template
})

//@CanActivate(() => AuthRouteHelper.requireUnauth())

export class Conflicts {
  constructor(private auth: AuthService, private router: Router) {}

  //signInWithGithub(): void {
  //  this.auth.signInWithGithub()
  //    .then(() => this.postSignIn());
  //}
  //
  //signInWithGoogle(): void {
  //  this.auth.signInWithGoogle()
  //    .then(() => this.postSignIn());
  //}
  //
  //signInWithTwitter(): void {
  //  this.auth.signInWithTwitter()
  //    .then(() => this.postSignIn());
  //}

  //private postSignIn(): void {
  //  this.router.navigate(['/Tasks']);
  //}
}
