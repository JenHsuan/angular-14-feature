import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

enum ROUTE_TYPE {
  STAND_ALONE = 'STAND_ALONE',
  TYPED_FORM = 'TYPED_FORM',
  NOTES = 'NOTES',
  STREAMLINE = 'STREAMLINE',
  CDK = 'CDK'
}

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/typedform', ROUTE_TYPE.TYPED_FORM],
  ['/streamline', ROUTE_TYPE.STREAMLINE],
  ['/cdk', ROUTE_TYPE.CDK],
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v14';
  selectedRoute = ROUTE_TYPE.STAND_ALONE;
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

  changeRoute(path: string) {
    this.router.navigate([path]);
  }

  getRouteStyle(path: string) {
    return this.selectedRoute === path ? 'tab-item current' : 'tab-item';
  }
}
