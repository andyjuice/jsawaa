import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocListComponent } from './doc-list/doc-list.component';

@NgModule({
  declarations: [DocListComponent],
  imports: [
    CommonModule,
    DocRoutingModule
  ],
  exports: [
    DocListComponent
  ]
})
export class DocModule { }
