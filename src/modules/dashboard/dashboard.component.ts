import {Component, Inject, inject} from '@angular/core';
import {Router} from '@angular/router';
import {IAuthenticationService} from '../../interfaces/services/authentication-service.interface';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
//#region Properties
  //#endregion

  //#region Contructor
  public constructor (@Inject('IAuthenticationService') private authenticationService : IAuthenticationService, public router: Router){

  }
  //#endregion

  //#region Methods
  public SignOut(): void{
    this.authenticationService.clearIdentity();
    this.router.navigate(['/login']);
  }
  //#endregion
}
