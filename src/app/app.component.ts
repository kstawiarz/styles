import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Toolbox';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.initLanguages();
  }

  initLanguages(): void {
    this.translateService.addLangs(['pl']);
    this.translateService.setDefaultLang('pl');
    this.translateService.use('pl');
  }
}
