import {NgModule} from '@angular/core';
import {UserRouterModule} from './user.router';
import {FormsModule} from '@angular/forms';
import {UserListingComponent} from './user-listing/user-listing.component';
import {ProfileComponent} from './profile/profile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    UserRouterModule,
    FormsModule,

    CommonModule
  ],
  declarations: [
    UserListingComponent,
    ProfileComponent,
    UserDetailComponent,
  ],
  exports: [
    UserListingComponent,
    ProfileComponent,
    UserDetailComponent,
  ]
})

export class UserModule {

}
