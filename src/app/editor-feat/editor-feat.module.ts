import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSliderModule, MatSidenavModule } from '@angular/material';


import { EditorFeatRoutingModule } from './editor-feat-routing.module';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    AceEditorModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatSidenavModule,
    EditorFeatRoutingModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorFeatModule { }
