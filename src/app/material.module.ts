import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {

  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatDividerModule
} from '@angular/material';


const myModules = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...myModules
  ],
  exports: [
    ...myModules
  ]
})
export class MaterialModule { }
