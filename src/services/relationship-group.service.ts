import {IRelationshipGroupService} from '../interfaces/services/relationship-group-service.interface';
import {RelationshipGroupViewModel} from '../view-models/relationship-group/relationship-group-view-model';
import {Observable} from 'rxjs';
import {SearchResultViewModel} from '../view-models/common/search-result-view-model';
import {HttpClient} from '@angular/common/http';
import {PaginationViewModel} from '../view-models/common/pagination-view-model';
import {readElementValue} from '@angular/core/src/render3/util';
import {Injectable} from '@angular/core';

@Injectable()
export class RelationshipGroupService implements IRelationshipGroupService {

  public constructor(public httpClient: HttpClient) {

  }

  public addRelationshipGroup(relationshipGroupViewModel: RelationshipGroupViewModel): Observable<RelationshipGroupViewModel> {
    const url = 'http://localhost:4010/api/relationship-group';
    return this.httpClient
      .post<RelationshipGroupViewModel>(url, relationshipGroupViewModel);
  }

  public editRelationshipGroup(relationshipGroupViewModel: RelationshipGroupViewModel): Observable<RelationshipGroupViewModel> {
    const url = 'http://localhost:4010/api/relationship-group';

    return this.httpClient
      .put<RelationshipGroupViewModel>(url, relationshipGroupViewModel);
  }

  public getRelationshipGroupById(id: string): Observable<RelationshipGroupViewModel> {
    const url = 'http://localhost:4010/api/relationship-group/' + id;
    return this.httpClient
      .get<RelationshipGroupViewModel>(url);
  }

  public searchRelationshipGroup(): Observable<SearchResultViewModel<RelationshipGroupViewModel>> {
    const url = 'http://localhost:4010/api/relationship-group/search';
    const paginationViewModel = new PaginationViewModel();
    paginationViewModel.pageNumber = 1;
    paginationViewModel.pageSize = 30;
    return this.httpClient
      .post<SearchResultViewModel<RelationshipGroupViewModel>>(url, paginationViewModel);
  }

}
