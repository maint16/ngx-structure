import {Component, Inject} from '@angular/core';
import {RegisterViewModel} from '../../../view-models/account/register.view-model';
import {IUserService} from '../../../interfaces/services/user-service.interface';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  public registerModel: RegisterViewModel;

  public constructor(@Inject('IUserService') public userService: IUserService) {
    this.registerModel = new RegisterViewModel();
  }

  public RegisterUser(): void{
    this.userService
      .registerAsync(this.registerModel)
      .subscribe(x => {
        alert('register successfully');
      });
  }
}
