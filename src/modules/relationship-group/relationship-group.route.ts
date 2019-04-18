// #region Router configuration
import {Router, RouterModule, Routes} from '@angular/router';
import {IsAuthorizedGuard} from '../../guards/is-authorized-guard';
import {NgModule} from '@angular/core';
import {RelationshipGroupListingComponent} from './relationship-group-listing/relationship-group-listing.component';
import {RelationshipGroupDetailComponent} from './relationship-group-detail/relationship-group-detail.component';
import {ProfileResolve} from '../../resolves/profile.resolve';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    canActivate: [IsAuthorizedGuard],
   /* resolve: {
      profile: ProfileResolve
    },*/
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: 'relationship-group-listing',
        pathMatch: 'full',
          component: RelationshipGroupListingComponent
      },
      {
        path: 'add-relationship-group',
        pathMatch: 'full',
        component: RelationshipGroupDetailComponent
      },
      {
        path: 'edit-relationship-group/:id',
        pathMatch: 'full',
        component: RelationshipGroupDetailComponent
      }
    ]
  }
];
// #endregion

// #region Module confuguration
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RelationshipRouterModule {

}

// #endregion
