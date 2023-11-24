import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-stream-line-page-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stream-line-page-title.component.html',
  styleUrls: ['./stream-line-page-title.component.scss']
})
export class StreamLinePageTitleComponent extends BaseComponent {

  instruction = `
  //Update the app-routing.module.ts
  
  const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'standalone'},
    //lazy loading
    {
      path: 'standalone',
      loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent)
      title: 'Stand-alone component'
    },
  ];
  `;

  complexInstruction = `

  //1. Update the app-routing.module.ts
  
  const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'standalone'},
    //lazy loading
    {
      path: 'standalone',
      loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent)
      title: 'Stand-alone component'
    },
  ];

  //2. Add the following startegy
  @Injectable()
  export class TemplatePageTitleStrategy extends TitleStrategy {
    override updateTitle(routerState: RouterStateSnapshot) {
      const title = this.buildTitle(routerState);
      if (title !== undefined) {
        document.title = \`Angular 14 - \${title}\`;
      } else {
        document.title = \`Angular 14 - Home\`;
      };
    }
  }

  //3.Update app.module.ts
  @NgModule({
    ...,
    providers: [
      {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
    ],
    ...
  })
  `;

}
