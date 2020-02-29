import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from './material-design/material-design.module';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationLinksComponent } from './components/navigation-links/navigation-links.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SearchInputComponent,
    LoadingComponent,
    LogoComponent,
    NavigationLinksComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    HttpClientModule,
    TranslateModule.forChild(),
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialDesignModule,
    SearchInputComponent,
    LoadingComponent,
    FlexLayoutModule,
    TranslateModule,
    LogoComponent,
    NavigationLinksComponent,
    FooterComponent
  ],
})
export class SharedModule {
}
