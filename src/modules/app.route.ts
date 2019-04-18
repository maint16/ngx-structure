import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

//#region Properties

// Application routes configuration.
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/relationship-group/relationship-group-listing'
      },
      {
        path: 'login',
        loadChildren: 'modules/account/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: 'modules/account/register/register.module#RegisterModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'modules/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'user',
        loadChildren: 'modules/user/user.module#UserModule',
      },
      {
        path: 'relationship-group',
        loadChildren: 'modules/relationship-group/relationship-group.module#RelationshipGroupModule',

      }
    ]
  }
];

//#endregion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})

export class AppRouteModule {
}
