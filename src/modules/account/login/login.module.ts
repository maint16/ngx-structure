import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRouteModule} from './login.route';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    LoginRouteModule,
    FormsModule
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
