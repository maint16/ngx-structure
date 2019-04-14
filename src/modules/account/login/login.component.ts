import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {LoginViewModel} from '../../../view-models/account/login.view-model';
import {IAuthenticationService} from '../../../interfaces/services/authentication-service.interface';
import {AuthorizationToken} from '../../../models/authorization-token';
import {Router} from '@angular/router';

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
      .subscribe(x => {
        const authenTokenModel = new AuthorizationToken();
        authenTokenModel.code = '123';
        authenTokenModel.expire = 2345555;
        authenTokenModel.lifeTime = 34343;
        this.authenticationService.setAuthorization(authenTokenModel);
        alert('Login successfully');
        this.router.navigate(['/dashboard']);

      });
  }

}
