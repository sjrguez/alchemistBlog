import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {

  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';


const myModules = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
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
