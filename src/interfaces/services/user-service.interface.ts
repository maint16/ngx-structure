import {LoginViewModel} from '../../view-models/account/login.view-model';
import {Observable} from 'rxjs/internal/Observable';
import {RegisterViewModel} from '../../view-models/account/register.view-model';
import {ProfileViewModel} from '../../view-models/profile.view-model';
import {AuthorizationToken} from '../../models/authorization-token';
import {SearchResultViewModel} from '../../view-models/common/search-result-view-model';
import {UserViewModel} from '../../view-models/user/user.view-model';
import {SearchUserViewModel} from '../../view-models/user/search-user-view-model';

export interface IUserService {
  //#region methods

  loginAsync(username: string, password: string): Observable<AuthorizationToken>;

  registerAsync(registerViewModel: RegisterViewModel): Observable<ProfileViewModel>;

  getUserProfileAsync(accessToken: string): Observable<ProfileViewModel>;

  searchUserAsync(searchUserViewModel: SearchUserViewModel): Observable<SearchResultViewModel<UserViewModel>>;

  getUserByIdAsync(id: string): Observable<UserViewModel>;

  addUserAsync(userModel: UserViewModel): Observable<UserViewModel>;

  editUserAsync(userId: string, userModel: UserViewModel): Observable<UserViewModel>;

  //#endregion
}
