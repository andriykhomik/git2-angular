import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss'],
})
export class BlocksListComponent implements OnInit {
  @Input() public users!: User[] | null;

  constructor() {}

  ngOnInit(): void {
    console.log('blocks list');
    console.log(this.users);
  }
}
