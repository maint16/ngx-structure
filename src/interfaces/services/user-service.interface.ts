
import {LoginViewModel} from '../../view-models/login.view-model';
import {Observable} from 'rxjs/internal/Observable';

export interface IUserService {
  //#region methods

  loginAsync(username: string, password: string): Observable<LoginViewModel>;

  //#endregion
}
