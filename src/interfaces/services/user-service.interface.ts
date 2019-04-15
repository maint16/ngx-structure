import {LoginViewModel} from '../../view-models/account/login.view-model';
import {Observable} from 'rxjs/internal/Observable';
import {RegisterViewModel} from '../../view-models/account/register.view-model';
import {ProfileViewModel} from '../../view-models/profile.view-model';
import {AuthorizationToken} from '../../models/authorization-token';
import {SearchResultViewModel} from '../../view-models/common/search-result-view-model';
import {UserViewModel} from '../../view-models/user/user.view-model';

export interface IUserService {
  //#region methods

  loginAsync(username: string, password: string): Observable<AuthorizationToken>;

  registerAsync(registerViewModel: RegisterViewModel): Observable<ProfileViewModel>;

  GetUserProfileAsync(accessToken: string): Observable<ProfileViewModel>;

  SearchUserAsync(): Observable<SearchResultViewModel>;

  GetUserByIdAsync(id: string): Observable<UserViewModel>;

  //#endregion
}
