import {Component, Inject} from '@angular/core';
import {RegisterViewModel} from '../../../view-models/account/register.view-model';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  public registerModel: RegisterViewModel;

  public constructor(@Inject('IUserService') public userService: IUserService, public router: Router) {
    this.registerModel = new RegisterViewModel();
  }

  public RegisterUser(): void{
    this.userService
      .registerAsync(this.registerModel)
      .subscribe(x => {
        this.router.navigate(['/dashboard']);
      });
  }
}
