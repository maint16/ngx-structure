
import {LoginViewModel} from '../../view-models/account/login.view-model';
import {Observable} from 'rxjs/internal/Observable';
import {RegisterViewModel} from '../../view-models/account/register.view-model';
import {ProfileViewModel} from '../../view-models/profile.view-model';

export interface IUserService {
  //#region methods

  loginAsync(username: string, password: string): Observable<LoginViewModel>;

  registerAsync(registerViewModel: RegisterViewModel ): Observable<ProfileViewModel>;
  //#endregion
}
