import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatePageTitleStrategy } from './starategy/template-page-title.strategy';
import { TitleStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: TitleStrategy,  useClass: TemplatePageTitleStrategy}
  ],
  bootstrap: []
})
export class AppModule { }
