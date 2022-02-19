import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
  public users$!: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    console.log('blocks');
    console.log(this.users$);
  }

  searchName(usersName: string) {
    if (usersName) {
      this.users$ = this.usersService.getUsers(usersName);
      console.log(this.users$);
    }
  }
}
