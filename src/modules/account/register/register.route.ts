import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';
import {NgModule} from '@angular/core';

//#region: Router configuraton

const routes: Routes=[
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RegisterComponent
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

export class RegisterRouteModule {

}
//#endregion
