import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorFeatRoutingModule } from './editor-feat-routing.module';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorFeatRoutingModule
  ]
})
export class EditorFeatModule { }
