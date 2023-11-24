import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

enum ROUTE_TYPE {
  STAND_ALONE = 'STAND_ALONE',
  TYPED_FORM = 'TYPED_FORM',
  NOTES = 'NOTES',
  STREAMLINE = 'STREAMLINE',
  CDK = 'CDK',
  CLI = 'CLI',
  DEV_TOOL = 'DEV_TOOL',
  ESBUILD = 'ESBUILD',
  COMPONENT_HARNESS = 'COMPONENT_HARNESS',
  ON_PUSH = 'ON_PUSH'
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/typedform', ROUTE_TYPE.TYPED_FORM],
  ['/streamline', ROUTE_TYPE.STREAMLINE],
  ['/cdk', ROUTE_TYPE.CDK],
  ['/cli', ROUTE_TYPE.CLI],
  ['/devtool', ROUTE_TYPE.DEV_TOOL],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/componentharness', ROUTE_TYPE.COMPONENT_HARNESS],
  ['/onpush', ROUTE_TYPE.ON_PUSH],
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v14';
  updateTime = '2023/11/14';
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
