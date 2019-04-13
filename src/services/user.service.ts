import {of} from 'rxjs';
import {IUserService} from '../interfaces/services/user-service.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginViewModel} from '../view-models/account/login.view-model';
import {Observable} from 'rxjs';
import {RegisterViewModel} from '../view-models/account/register.view-model';
import {ProfileViewModel} from '../view-models/profile.view-model';

@Injectable()
export class UserService implements IUserService {

  //#region Constructor
  public constructor(public httpClient: HttpClient) {

  }

  //#endregion

  //#region Methods
  public loginAsync(username: string, password: string): Observable<LoginViewModel> {
    let url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/login';
    const loginViewModel = new LoginViewModel();
    loginViewModel.username = username;
    loginViewModel.password = password;

    return this.httpClient
      .post<LoginViewModel>(url, loginViewModel);
  }

  registerAsync(registerViewModel: RegisterViewModel): Observable<ProfileViewModel> {
    let url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/register';
    return this.httpClient
      .post<ProfileViewModel>(url, registerViewModel);
  }

  //#endregion

}
