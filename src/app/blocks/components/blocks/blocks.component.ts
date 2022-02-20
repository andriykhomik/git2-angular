import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit, OnDestroy {
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

  public searchName(usersName: string) {
    if (usersName) {
      this.users$ = this.usersService.getUsers(usersName);
      this.usersService.savedInputValue$.next(usersName);
    }
  }

  ngOnDestroy(): void {}
}
