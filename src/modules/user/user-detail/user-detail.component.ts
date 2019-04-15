import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {UserViewModel} from '../../../view-models/user/user.view-model';

@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent {
  //#region Properties
  public userViewModel: UserViewModel;
  //#endregion

  //#region Contructor
  public constructor(@Inject('IUserService') public userService: IUserService) {
    this.userViewModel = new UserViewModel();
    this.GetUserDetail();
  }

  //#endregion

  //#region Methods
  public GetUserDetail(): void {

   /* this.userService
      .GetUserProfileAsync()*/

  }

  //#endregion

}
