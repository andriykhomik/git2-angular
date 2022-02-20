import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  @Input() public users!: User[];

  constructor() {}

  ngOnInit(): void {}
}
