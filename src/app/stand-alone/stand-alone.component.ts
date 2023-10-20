import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandAloneItemComponent } from './stand-alone-item/stand-alone-item.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [CommonModule, StandAloneItemComponent],
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss']
})
export class StandAloneComponent {
  instruction = `
  npx @angular/cli@14 new Angular14Project
  `;

  stanaloneInstruction = `
  ng g c stand-alone --standalone
  `;
  
  code = `
  //1. Create a few stand-alone components
  
  ng g c stand-alone --standalone
  ng g c stand-alone-item --standalone

  //2. Update the app-routing.module.ts
  
  const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'standalone'},
    //lazy loading
    {
      path: 'standalone',
      loadComponent: () => import('../app/stand-alone/stand-alone.component').then(m => m.StandAloneComponent)
    },
  ];

  ...

  //3. Import dependencies from the component instead of the module

  @Component({
    selector: 'app-stand-alone',
    standalone: true,
    imports: [CommonModule, StandAloneItemComponent],
    templateUrl: './stand-alone.component.html',
    styleUrls: ['./stand-alone.component.scss']
  })
  export class StandAloneComponent implements OnInit {
    ...
  }

  //4. Use the imported component in the templete
  <app-stand-alone-item></app-stand-alone-item>
  `;

  removeModuleCode = `

  //1. Export the route list from app-routing.module.ts
  export const routes: Routes = [...];

  //2. Update the app.component.ts to the stand-alone component
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    ...

  //3. Update main.ts
  ...,
  bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(RouterModule.forRoot(routes))],
  }); 
  `;

  escapeHtml(str: string) {
    return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
  }
}
