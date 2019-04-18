import {Component, Inject} from '@angular/core';
import {RelationshipGroupViewModel} from '../../../view-models/relationship-group/relationship-group-view-model';
import {IRelationshipGroupService} from '../../../interfaces/services/relationship-group-service.interface';
import {flatMap, map} from 'rxjs/operators';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {SearchUserViewModel} from '../../../view-models/user/search-user-view-model';
import {SearchResultViewModel} from '../../../view-models/common/search-result-view-model';
import {UserViewModel} from '../../../view-models/user/user.view-model';

@Component({
  selector: 'relationship-group-listing',
  templateUrl: 'relationship-group-listing.component.html'
})

export class RelationshipGroupListingComponent {

  // #region Properties
  public relationshipGroupList: RelationshipGroupViewModel[];
  // @endregion

  // #region Contructor
  public constructor(@Inject('IRelationshipGroupService') public relationshipGroupService: IRelationshipGroupService,
                     @Inject('IUserService') public userService: IUserService) {

    this.searchRelationshipGroup();
  }

  // #endregion

  // #region Methods
  public searchRelationshipGroup(): void {
    let relationGroups;
    this.relationshipGroupService
      .searchRelationshipGroup()
      .pipe(
        flatMap(x => {
          relationGroups = x.records;

          // Get all user by userids from relationship groups
          const selectedIds = relationGroups.map(({id}) => id);
          const searchUserViewModel = new SearchUserViewModel();
          searchUserViewModel.ids = selectedIds;
          return this.userService.searchUserAsync(searchUserViewModel);
        }),
        map((o: SearchResultViewModel<UserViewModel>) => {
          relationGroups.forEach(m => {
            const user = o.records.find(i => i.id === m.creatorId);
            if (user !== undefined) {
              m.creatorName = user.lastName + ' ' + user.firstName;
            }
            return relationGroups;
          });
        })
      )
      .subscribe(x => {
        this.relationshipGroupList = relationGroups;
      });
    //
  }


// #endregion
}
