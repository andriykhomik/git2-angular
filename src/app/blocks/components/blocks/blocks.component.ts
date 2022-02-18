import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/interfaces';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
  public users$!: Observable<User[]>;

  public searchControl: FormControl = new FormControl('blocks', [
    Validators.required,
  ]);

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      if (value) {
        this.users$ = this.usersService.getUsers(value);
      }
    });
  }
}
