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
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
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
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
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
