import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {LoginViewModel} from '../../../view-models/account/login.view-model';

@Component ({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  public model: LoginViewModel;

  public constructor(@Inject('IUserService') public userService: IUserService) {
    this.model = new LoginViewModel();
  }

  public ngOnClick(): void {
    this.userService
      .loginAsync(this.model.username, this.model.password)
      .subscribe(x => {
        alert('Login successfully');
      });
  }

}
