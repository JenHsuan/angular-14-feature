import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP } from '../route/route.domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  title = 'Notes of Angular v14';
  updateTime = '2023/11/14';
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;

  sideBarList = [
    ROUTE_TYPE.STAND_ALONE,
    ROUTE_TYPE.TYPED_FORM,
    ROUTE_TYPE.ESBUILD,
    ROUTE_TYPE.STREAMLINE,
    ROUTE_TYPE.CDK,
    ROUTE_TYPE.CLI,
    ROUTE_TYPE.DEV_TOOL,
    //ROUTE_TYPE.COMPONENT_HARNESS,
    ROUTE_TYPE.ON_PUSH,
    ROUTE_TYPE.NOTES,
    ROUTE_TYPE.BREAKING_CHANGE,
    ROUTE_TYPE.DEPRECATIONS,
    ROUTE_TYPE.DOCUMENTS
  ];

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe((val) => {
      console.log(val)
      if(location.path() != ''){
        const slices = location.path().split('/');
        this.route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.HOME;
      } else {
        this.route = 'Home';
      }
    });
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: ROUTE_TYPE) {
    console.log(type)
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    console.log(path)
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
