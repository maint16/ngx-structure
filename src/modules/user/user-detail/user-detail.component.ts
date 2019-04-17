import {Component, Inject} from '@angular/core';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {UserViewModel} from '../../../view-models/user/user.view-model';
import {ActivatedRoute, Router} from '@angular/router';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent {
  //#region Properties
  public userViewModel: UserViewModel;

  public userId: string | undefined;
  //#endregion

  //#region Contructor
  public constructor(@Inject('IUserService') public userService: IUserService,
                     public router: Router,
                     public activeRouter: ActivatedRoute) {
    this.userViewModel = new UserViewModel();
    // Get Id from url
    this.activeRouter.params.subscribe(x => {
      this.userId = x.id;
    });
    this.GetUserDetail();
  }

  //#endregion

  //#region Methods
  public GetUserDetail(): void {

    if (this.userId !== undefined) {
      this.userService
        .GetUserByIdAsync(this.userId)
        .subscribe(x => {
          this.userViewModel = x;
        });
    }


  }

  public AddOrEditUser(): void {

    if (this.userId === undefined) {
      // Add User
      this.userService
        .AddUserAsync(this.userViewModel)
        .subscribe(x => {
          this.userViewModel = x;
        });
    } else {
      // Edit User
      this.userService
        .EditUserAsync(this.userId, this.userViewModel)
        .subscribe(x => {
          this.userViewModel = x;
        });

    }

  }

  //#endregion

}
