import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent implements OnInit {
  @Input() public control!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
