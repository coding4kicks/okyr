import { Component } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';

const styles: string = require('./new-conflict.scss');
const template: string = require('./new-conflict.html');
import { ConflictService } from 'core/conflict/conflict-service';


@Component({
  selector: 'new-conflict',
  styles: [styles],
  template
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class NewConflict {
  title: string = '';
  imageUrl: string = ''; // Figure out url

  constructor(public conflictService: ConflictService) {}

  //clear(): void {
  //  this.title = '';
  //}

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.conflictService.createConflict(title, this.imageUrl);
    }

    // TODO: route to conflict view page or show Challenge or create side.
    //this.clear();
  }
}
