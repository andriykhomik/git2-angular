import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-blocks-item',
  templateUrl: './blocks-item.component.html',
  styleUrls: ['./blocks-item.component.scss'],
})
export class BlocksItemComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}
}
