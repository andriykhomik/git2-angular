import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent implements OnInit {
  @Input() public previousValue: string = '';
  @Output() private searchName: EventEmitter<string> =
    new EventEmitter<string>();

  public searchInput: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.searchInput.setValue(this.previousValue);
  }

  public inputValue() {
    console.log(this.searchInput.value);
    // console.log('search value');
    this.searchName.emit(this.searchInput.value);
  }
}
