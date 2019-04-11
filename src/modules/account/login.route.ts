import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthorizeLayoutComponent} from '../shared/authorize-layout/authorize-layout.component';
import {IsAuthorizedGuard} from '../../guards/is-authorized-guard';
import {ProfileResolve} from '../../resolves/profile.resolve';
import {NgModule} from '@angular/core';

//#region: Router configuration

const routes: Routes = [
  {
   path: '',
   pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
      }
    ]
  }
  ];

//#endregion

//#region module configuration
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouteModule {
}
//#endregion
