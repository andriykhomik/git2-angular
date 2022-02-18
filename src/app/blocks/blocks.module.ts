import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './components/blocks/blocks.component';
import { BlocksListComponent } from './components/blocks-list/blocks-list.component';
import { BlocksItemComponent } from './components/blocks-item/blocks-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: BlocksComponent }];

@NgModule({
  declarations: [BlocksComponent, BlocksListComponent, BlocksItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BlocksModule {}
