import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {UserViewModel} from '../../../view-models/user/user.view-model';

@Component({
  selector: 'user-listing',
  templateUrl: 'user-listing.component.html'
})

export class UserListingComponent {

  //#region Properties
  public userList: UserViewModel[];
  //#endregion

  //#region Contructor
  public constructor(@Inject('IUserService') public userService: IUserService) {
    this.SearchUser();
  }

  //#endregion

  //#region Methods
  public SearchUser(): void {
    this.userService
      .SearchUserAsync()
      .subscribe(x => {
        this.userList = x.records;
      });
  }

  //#endregion
}
