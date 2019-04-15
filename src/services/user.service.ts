import {of} from 'rxjs';
import {IUserService} from '../interfaces/services/user-service.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginViewModel} from '../view-models/account/login.view-model';
import {Observable} from 'rxjs';
import {RegisterViewModel} from '../view-models/account/register.view-model';
import {ProfileViewModel} from '../view-models/profile.view-model';
import {AuthorizationToken} from '../models/authorization-token';
import {PaginationViewModel} from '../view-models/common/pagination-view-model';
import {SearchResultViewModel} from '../view-models/common/search-result-view-model';
import {UserViewModel} from '../view-models/user/user.view-model';

@Injectable()
export class UserService implements IUserService {

  //#region Constructor
  public constructor(public httpClient: HttpClient) {

  }

  //#endregion

  //#region Methods
  public loginAsync(username: string, password: string): Observable<AuthorizationToken> {
    let url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/login';
    const loginViewModel = new LoginViewModel();
    loginViewModel.username = username;
    loginViewModel.password = password;

    return this.httpClient
      .post<AuthorizationToken>(url, loginViewModel);
  }

  registerAsync(registerViewModel: RegisterViewModel): Observable<ProfileViewModel> {
    let url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/register';
    return this.httpClient
      .post<ProfileViewModel>(url, registerViewModel);
  }

  GetUserProfileAsync(accessToken: string): Observable<ProfileViewModel> {
    const url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/profile/' + accessToken;
    return this.httpClient
      .get<ProfileViewModel>(url);
  }

  SearchUserAsync(): Observable<SearchResultViewModel> {
    const url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/user/search';
    const paginationViewModel = new PaginationViewModel();
    paginationViewModel.pageNumber = 1;
    paginationViewModel.pageSize = 30;
    return this.httpClient
      .post<SearchResultViewModel>(url, paginationViewModel);
  }

  GetUserByIdAsync(id: string): Observable<UserViewModel> {
    const url = 'http://frqxxcemawzbe3l8i-mock.stoplight-proxy.io/api/user/' + id;
    return this.httpClient
      .get<UserViewModel>(url);
  }

  //#endregion

}
