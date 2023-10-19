import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'standalone'},
  //lazy loading
  {
    path: 'standalone',
    loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent),
    title: 'Stand-alone component'
  },
  {
    path: 'notes',
    loadComponent: () => import('../app/notes/notes.component').then(m => m.NotesComponent),
    title: 'Angular 14 - notes'
  },
  {
    path: 'typedform',
    loadComponent: () => import('../app/typed-form/typed-form.component').then(m => m.TypedFormComponent),
    title: 'Typed Form'
  },
  {
    path: 'streamline',
    loadComponent: () => import('../app/stream-line-page-title/stream-line-page-title.component').then(m => m.StreamLinePageTitleComponent),
    title: 'Streamline title'
  },
  {
    path: 'cdk',
    loadChildren: () => import('../app/cdk/cdk.module').then(m => m.CdkModule),
    title: 'CDK improvements'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
