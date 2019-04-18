import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {UserViewModel} from '../../../view-models/user/user.view-model';
import {SearchUserViewModel} from '../../../view-models/user/search-user-view-model';

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
    this.searchUser();
  }

  //#endregion

  //#region Methods
  public searchUser(): void {
    const searchUserViewModel = new SearchUserViewModel();
    this.userService
      .searchUserAsync(searchUserViewModel)
      .subscribe(x => {
        this.userList = x.records;
      });
  }

  //#endregion
}
