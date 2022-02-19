import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchUsersComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SearchUsersComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
