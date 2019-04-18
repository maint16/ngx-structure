import {NgModule} from '@angular/core';
import {RelationshipRouterModule} from './relationship-group.route';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RelationshipGroupListingComponent} from './relationship-group-listing/relationship-group-listing.component';
import {RelationshipGroupDetailComponent} from './relationship-group-detail/relationship-group-detail.component';

@NgModule({
  imports: [
    RelationshipRouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    RelationshipGroupListingComponent,
    RelationshipGroupDetailComponent
  ],
  exports: [
    RelationshipGroupListingComponent,
    RelationshipGroupDetailComponent
  ]
})

export class RelationshipGroupModule {

}
