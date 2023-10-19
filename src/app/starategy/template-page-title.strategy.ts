import { Injectable } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      document.title = `Angular 14 - ${title}`;
    } else {
      document.title = `Angular 14 - Home`;
    };
  }
}