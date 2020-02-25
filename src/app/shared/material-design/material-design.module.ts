import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialModules = [
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialDesignModule { }
