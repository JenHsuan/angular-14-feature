import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatePageTitleStrategy } from './starategy/template-page-title.strategy';
import { TitleStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: TitleStrategy,  useClass: TemplatePageTitleStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
