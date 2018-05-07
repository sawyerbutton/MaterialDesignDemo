import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatRippleModule
  ]
})

export class SharedMaterialModule {}
