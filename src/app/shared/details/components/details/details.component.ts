import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public user$!: Observable<User>;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params['login']);
      this.user$ = this.userService.getUser(params['login']);
      console.log(this.user$);
    });
    // this.userService.
  }
}
