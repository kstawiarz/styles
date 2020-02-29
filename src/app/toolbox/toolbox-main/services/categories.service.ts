import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private delay = 1000;

  constructor(private http: HttpClient) {
  }

  getCategories() {
    const url = '/assets/mocks/database.json';
    return this.http.get(url)
      .pipe(delay(this.delay));
  }
}
