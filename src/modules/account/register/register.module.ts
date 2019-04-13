import {NgModule} from '@angular/core';
import {RegisterRouteModule} from './register.route';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    RegisterRouteModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ]
})

export class RegisterModule {

}
