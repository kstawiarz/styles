import { Component, Input, OnInit } from '@angular/core';
import { CategoriesModel } from '../../../../shared/models/categories.model';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {

  @Input() category: CategoriesModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
