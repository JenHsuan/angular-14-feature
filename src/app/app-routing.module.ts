import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component').then(m => m.HomeComponent),
    title: 'Angular 15'
  },
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
    path: 'cli',
    loadComponent: () => import('../app/cli/cli.component').then(m => m.CliComponent),
    title: 'CLI enhancements'
  },
  {
    path: 'cdk',
    loadChildren: () => import('../app/cdk/cdk.module').then(m => m.CdkModule),
    title: 'CDK improvements'
  },
  {
    path: 'devtool',
    loadComponent: () => import('../app/dev-tool/dev-tool.component').then(m => m.DevToolComponent),
    title: 'Dev tools enhancements'
  },
  {
    path: 'esbuild',
    loadComponent: () => import('../app/esbuild/esbuild.component').then(m => m.EsbuildComponent),
    title: 'esbuild supported on the ng build'
  },
  {
    path: 'componentharness',
    loadComponent: () => import('../app/component-harness/component-harness.component').then(m => m.ComponentHarnessComponent),
    title: 'component harness'
  },
  {
    path: 'onpush',
    loadComponent: () => import('../app/on-push/on-push.component').then(m => m.OnPushComponent),
    title: 'OnPush startegy'
  },
  {
    path: 'breaking-changes',
    loadComponent: () => import('../app/breaking-changes/breaking-changes.component').then(m => m.default),
    title: 'Breaking changes'
  },
  {
    path: 'deprecations',
    loadComponent: () => import('../app/deprecations/deprecations.component').then(m => m.default),
    title: 'Deprecations'
  },
  {
    path: 'documents',
    loadComponent: () => import('../app/documents/documents.component').then(m => m.default),
    title: 'Documents'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
