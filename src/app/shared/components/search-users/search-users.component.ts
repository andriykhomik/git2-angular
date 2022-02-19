import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent implements OnInit {
  @Output() searchName: EventEmitter<string> = new EventEmitter<string>();

  public searchInput: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  getUsers() {
    this.searchName.emit(this.searchInput.value);
    this.searchInput.reset();
  }
}
