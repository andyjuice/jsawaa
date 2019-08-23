import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor-feat/editor/editor.component';
import { DocListComponent } from './doc/doc-list/doc-list.component';

const routes: Routes = [
  {
    path: 'docs',
    // loadChildren: './doc/doc.module#DocModule'
    component: EditorComponent

  },
  {
    path: 'editor',
    // loadChildren: './editor-feat/editor-feat.module#EditorFeatModule'
    component: DocListComponent
  },
  {
    path: '',
    redirectTo:'',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
