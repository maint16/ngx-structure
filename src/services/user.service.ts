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
import {SearchUserViewModel} from '../view-models/user/search-user-view-model';

@Injectable()
export class UserService implements IUserService {

  //#region Constructor
  public constructor(public httpClient: HttpClient) {

  }

  //#endregion

  //#region Methods
  public loginAsync(username: string, password: string): Observable<AuthorizationToken> {
    let url = 'http://localhost:4010/api/login';
    const loginViewModel = new LoginViewModel();
    loginViewModel.username = username;
    loginViewModel.password = password;

    return this.httpClient
      .post<AuthorizationToken>(url, loginViewModel);
  }

  registerAsync(registerViewModel: RegisterViewModel): Observable<ProfileViewModel> {
    let url = 'http://localhost:4010/api/register';
    return this.httpClient
      .post<ProfileViewModel>(url, registerViewModel);
  }

  getUserProfileAsync(accessToken: string): Observable<ProfileViewModel> {
    const url = 'http://localhost:4010/api/user/profile/' + accessToken;
    return this.httpClient
      .get<ProfileViewModel>(url);
  }

  searchUserAsync(searchUserViewModel: SearchUserViewModel): Observable<SearchResultViewModel<UserViewModel>> {
    const url = 'http://localhost:4010/api/user/search';
    const paginationViewModel = new PaginationViewModel();
    paginationViewModel.pageNumber = 1;
    paginationViewModel.pageSize = 30;

    searchUserViewModel.pagination= paginationViewModel;

    return this.httpClient
      .post<SearchResultViewModel<UserViewModel>>(url, searchUserViewModel);
  }

  getUserByIdAsync(id: string): Observable<UserViewModel> {
    const url = 'http://localhost:4010/api/user/' + id;
    return this.httpClient
      .get<UserViewModel>(url);
  }

  addUserAsync(userModel: UserViewModel): Observable<UserViewModel> {
    const url = 'http://localhost:4010/api/user';
    return this.httpClient
      .post<UserViewModel>(url, userModel);
  }

  editUserAsync(userId: string, userModel: UserViewModel): Observable<UserViewModel> {
    const url = 'http://localhost:4010/api/user/' + userId;
    return this.httpClient
      .put<UserViewModel>(url, userModel);
  }

  //#endregion

}
