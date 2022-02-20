import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-details-user-info',
  templateUrl: './details-user-info.component.html',
  styleUrls: ['./details-user-info.component.scss'],
})
export class DetailsUserInfoComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}
}
