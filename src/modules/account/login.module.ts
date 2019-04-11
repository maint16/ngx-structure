import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRouteModule} from './login.route';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    LoginRouteModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {
 }
