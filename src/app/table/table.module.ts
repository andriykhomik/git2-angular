import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: TableComponent }];

@NgModule({
  declarations: [TableComponent, TableListComponent, TableItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TableModule {}
