import { Component } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';

const styles: string = require('./new-conflict.scss');
const template: string = require('./new-conflict.html');


@Component({
  selector: 'new-conflict',
  styles: [styles],
  template
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class NewConflict {
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
