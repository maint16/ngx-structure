import {Component, Inject} from '@angular/core';
import {RelationshipGroupViewModel} from '../../../view-models/relationship-group/relationship-group-view-model';
import {IRelationshipGroupService} from '../../../interfaces/services/relationship-group-service.interface';
import {flatMap, map} from 'rxjs/operators';
import {IUserService} from '../../../interfaces/services/user-service.interface';
import {SearchUserViewModel} from '../../../view-models/user/search-user-view-model';
import {SearchResultViewModel} from '../../../view-models/common/search-result-view-model';
import {UserViewModel} from '../../../view-models/user/user.view-model';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'relationship-group-listing',
  templateUrl: 'relationship-group-listing.component.html'
})

export class RelationshipGroupListingComponent {

  // #region Properties
  public relationshipGroupList: RelationshipGroupViewModel[];

  // Count all user who active in system
  public countUser: number;

  // Count all relationship group that active in system.
  public countRelationshipGroup: number;
  // @endregion

  // #region Contructor
  public constructor(@Inject('IRelationshipGroupService') public relationshipGroupService: IRelationshipGroupService,
                     @Inject('IUserService') public userService: IUserService) {

    this.searchRelationshipGroup();

    this.statisticSystem();
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

// Statistic all resource in system : users, relationship groups.
  public statisticSystem(): void {

    const requestArray = [];
    requestArray.push(this.relationshipGroupService.searchRelationshipGroup());
    requestArray.push(this.userService.searchUserAsync(new SearchUserViewModel()));

    forkJoin(requestArray)
      .pipe(
        map(([relationshipGroupSearchResult, userSearchResult]) => {
          return {relationshipGroupSearchResult, userSearchResult};
        })
      )
      .subscribe(({relationshipGroupSearchResult, userSearchResult}) => {
        this.countUser = userSearchResult.records.length;
        this.countRelationshipGroup = userSearchResult.records.length;
      });
  }


// #endregion
}
