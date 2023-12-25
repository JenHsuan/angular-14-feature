import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { SideBarComponent } from './public/side-bar/side-bar.component';
import { ROUTE_MAP, ROUTE_TYPE } from './public/route/route.domain';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.STAND_ALONE;
      } else {
        this.route = 'Home';
      }
    });
  }
}
