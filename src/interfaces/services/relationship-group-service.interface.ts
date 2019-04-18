import {Observable} from 'rxjs';
import {SearchResultViewModel} from '../../view-models/common/search-result-view-model';
import {RelationshipGroupViewModel} from '../../view-models/relationship-group/relationship-group-view-model';

export interface IRelationshipGroupService {

  searchRelationshipGroup(): Observable<SearchResultViewModel<RelationshipGroupViewModel>>;

  getRelationshipGroupById(id: string): Observable<RelationshipGroupViewModel>;

  addRelationshipGroup(relationshipGroupViewModel: RelationshipGroupViewModel): Observable<RelationshipGroupViewModel>;

  editRelationshipGroup(relationshipGroupViewModel: RelationshipGroupViewModel): Observable<RelationshipGroupViewModel>;
}
