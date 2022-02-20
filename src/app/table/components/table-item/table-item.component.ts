import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent implements OnInit {
  @Input() public users!: User[];

  constructor() {}

  ngOnInit(): void {}
}
