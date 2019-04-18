import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {LoginViewModel} from '../../../view-models/account/login.view-model';
import {IAuthenticationService} from '../../../interfaces/services/authentication-service.interface';
import {AuthorizationToken} from '../../../models/authorization-token';
import {Router} from '@angular/router';
import {catchError, flatMap, map} from 'rxjs/operators';
import {ProfileViewModel} from '../../../view-models/profile.view-model';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  public model: LoginViewModel;

  public constructor(@Inject('IUserService') public userService: IUserService,
                     @Inject('IAuthenticationService') public authenticationService: IAuthenticationService,
                     public router: Router) {
    this.model = new LoginViewModel();
  }

  public ngOnClick(): void {
    this.userService
      .loginAsync(this.model.username, this.model.password)
      .pipe(
        map(x => {
          this.authenticationService.setAuthorization(x);
          return x;
        }),
        flatMap(x => {
          return this.userService
            .getUserProfileAsync(x.code);
        })
      )
      .subscribe(x => {
        console.log(x);
        this.router.navigate(['/dashboard']);
      });
  }

}
