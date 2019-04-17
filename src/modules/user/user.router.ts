import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthorizeLayoutComponent} from '../shared/authorize-layout/authorize-layout.component';
import {IsAuthorizedGuard} from '../../guards/is-authorized-guard';
import {ProfileResolve} from '../../resolves/profile.resolve';
import {UserListingComponent} from './user-listing/user-listing.component';
import {ProfileComponent} from './profile/profile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

//#region Router configuration
const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    /*component: AuthorizeLayoutComponent,*/
    canActivate: [IsAuthorizedGuard],
    resolve: {
      profile: ProfileResolve
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/user-listing'

      },
      {
        path: 'user-listing',
        pathMatch: 'full',
        component: UserListingComponent,

      },
      {
        path: 'profile',
        pathMatch: 'full',
        component: ProfileComponent
      },
      {
        path: 'edit-user/:id',
        pathMatch: 'full',
        component: UserDetailComponent
      },
      {
        path: 'add-user',
        pathMatch: 'full',
        component: UserDetailComponent
      }
    ]
  }
];

//#endregion

//#region Module configuration
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRouterModule {

}

//#endregion
