import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public previousValue!: string;
  public users$!: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.searchPreviousName();
  }

  public searchPreviousName(): void {
    const value = this.usersService.savedInputValue$.getValue();
    if (value) {
      this.previousValue = value;
      this.searchName(value);
    }
  }

  public searchName(userName: string) {
    if (userName) {
      this.users$ = this.usersService.getUsers(userName);
      this.usersService.savedInputValue$.next(userName);
      console.log(this.users$);
    }
  }
}
