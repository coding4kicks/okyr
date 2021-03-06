import { Component } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';

const styles: string = require('./home.scss');
const template: string = require('./home.html');


@Component({
  selector: 'home',
  styles: [styles],
  template
})

//@CanActivate(() => AuthRouteHelper.requireUnauth())

export class Home {
  constructor(private auth:AuthService, private router:Router) {
    this.router = router;
  }

  newConflict():void {
    this.router.navigate(['NewConflict']);
  }

  conflicts():void {
    this.router.navigate(['Conflicts']);
  }

}