import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stream-line-page-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stream-line-page-title.component.html',
  styleUrls: ['./stream-line-page-title.component.scss']
})
export class StreamLinePageTitleComponent {

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

  escapeHtml(str: string) {
    return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
  }

}
