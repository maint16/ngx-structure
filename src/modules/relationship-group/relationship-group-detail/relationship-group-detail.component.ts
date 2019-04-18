import {Component, Inject} from '@angular/core';
import {RelationshipGroupViewModel} from '../../../view-models/relationship-group/relationship-group-view-model';
import {IRelationshipGroupService} from '../../../interfaces/services/relationship-group-service.interface';
import {ActivatedRoute} from '@angular/router';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'relationship-group',
  templateUrl: 'relationship-group-detail.component.html'
})

export class RelationshipGroupDetailComponent {
  // #region Properties
  public relationshipGroup: RelationshipGroupViewModel;

  public relationshipGroupId: string | undefined;
  // #endregion

  // #region Contructor
  public constructor(@Inject('IRelationshipGroupService') public relationshipGroupService: IRelationshipGroupService,
                     public activeRouter: ActivatedRoute) {
    this.relationshipGroup = new RelationshipGroupViewModel();
    this.activeRouter.params
      .subscribe(x => {
        this.relationshipGroupId = x.id;
      });
    this.getRelationshipGroupById();
  }

  // #endregion

  // #region Methods
  public getRelationshipGroupById() {
    if (this.relationshipGroupId !== undefined) {
      this.relationshipGroupService
        .getRelationshipGroupById(this.relationshipGroupId)
        .subscribe(x => {
          this.relationshipGroup = x;
        });
    }
  }

  public addOrEditRelationshipGroup() {
    if (this.relationshipGroupId === undefined) {
      // Add new

      this.relationshipGroupService
        .addRelationshipGroup(this.relationshipGroup)
        .subscribe(x => {
          this.relationshipGroup = x;
        });

    } else {
      // Edit
      this.relationshipGroupService
        .editRelationshipGroup(this.relationshipGroup)
        .subscribe(x => {
          this.relationshipGroup = x;
        });
    }
  }

  // #endregion

}
