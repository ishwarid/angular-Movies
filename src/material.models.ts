import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatNativeDateModule,
  MatAutocompleteModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    MatAutocompleteModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatAutocompleteModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule {}
