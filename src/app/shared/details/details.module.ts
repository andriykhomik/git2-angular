import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { DetailsUserInfoComponent } from './components/details-user-info/details-user-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DetailsComponent }];

@NgModule({
  declarations: [DetailsComponent, DetailsUserInfoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DetailsComponent],
})
export class DetailsModule {}
