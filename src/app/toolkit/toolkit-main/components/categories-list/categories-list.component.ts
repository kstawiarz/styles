import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  public categories: any;
  public loading = false;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.loading = true;
    this.categoriesService.getCategories()
      .subscribe(response => {
          this.loading = false;
          this.categories = response;
        },
        error => {
          this.loading = false;
          console.error('An error has occurred:', error);
        }
      );
  }

}
