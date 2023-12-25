export enum ROUTE_TYPE {
  HOME = 'HOME',
  STAND_ALONE = 'STAND_ALONE',
  TYPED_FORM = 'TYPED_FORM',
  NOTES = 'NOTES',
  STREAMLINE = 'STREAMLINE',
  CDK = 'CDK',
  CLI = 'CLI',
  DEV_TOOL = 'DEV_TOOL',
  ESBUILD = 'ESBUILD',
  COMPONENT_HARNESS = 'COMPONENT_HARNESS',
  ON_PUSH = 'ON_PUSH',
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS'
};

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
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
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/documents', ROUTE_TYPE.DOCUMENTS]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, 'Notes of Angular v17'],
  [ROUTE_TYPE.STAND_ALONE, 'Enhancements for Standalone API (Developer Preview)'],
  [ROUTE_TYPE.TYPED_FORM, 'Typed Form'],
  [ROUTE_TYPE.STREAMLINE, 'Streamline Page Title Accessibility'],
  [ROUTE_TYPE.CDK, 'Anglar CDK v14 Release'],
  [ROUTE_TYPE.CLI, 'CLI Enhancements'],
  [ROUTE_TYPE.DEV_TOOL, 'Angular DevTools Enhancements'],
  [ROUTE_TYPE.ESBUILD, 'esbuild Supported on the ng build (Experimental Feature)'],
  [ROUTE_TYPE.COMPONENT_HARNESS,'Component Harness'],
  [ROUTE_TYPE.ON_PUSH, 'OnPush Strategy Enhancements (Bugfix)'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents']
]);

/*
<button [ngClass]="getRouteStyle('STAND_ALONE')"
        mat-button (click)="changeRoute('standalone')">
        Standalone Component (Developer preview)
      </button>
      <button [ngClass]="getRouteStyle('TYPED_FORM')"
        mat-button (click)="changeRoute('typedform')">
        Typed Form
      </button>
      <button [ngClass]="getRouteStyle('STREAMLINE')"
        mat-button (click)="changeRoute('streamline')">
        Streamline Page Title Accessibility
      </button>
      <button [ngClass]="getRouteStyle('CDK')"
        mat-button (click)="changeRoute('cdk')">
        Anglar CDK v14 Release
      </button>
      <button [ngClass]="getRouteStyle('CLI')"
        mat-button (click)="changeRoute('cli')">
        CLI Enhancements
      </button>
      <button [ngClass]="getRouteStyle('DEV_TOOL')"
        mat-button (click)="changeRoute('devtool')">
        Angular DevTools Enhancements
      </button>
      <button [ngClass]="getRouteStyle('ESBUILD')"
        mat-button (click)="changeRoute('esbuild')">
        esbuild supported on the ng build (Experimental feature)
      </button>
      <!-- <button [ngClass]="getRouteStyle('COMPONENT_HARNESS')"
        mat-button (click)="changeRoute('componentharness')">
        component harness
      </button> -->
      <button [ngClass]="getRouteStyle('ON_PUSH')"
        mat-button (click)="changeRoute('onpush')">
        OnPush Strategy Enhancements (Bugfix)
      </button>
      <button [ngClass]="getRouteStyle('NOTES')"
        mat-button (click)="changeRoute('notes')">
        Notes
      </button>
*/