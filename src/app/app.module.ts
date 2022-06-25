import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceComponentComponent } from './reference-component/reference-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferencesComponent,
    ReferenceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
