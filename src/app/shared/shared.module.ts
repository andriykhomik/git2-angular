import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchUsersComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchUsersComponent],
})
export class SharedModule {}
