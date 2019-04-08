import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: './doc/doc.module#DocModule'

  },
  {
    path: 'editor',
    loadChildren: './editor-feat/editor-feat.module#EditorFeatModule'
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
