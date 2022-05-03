import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ExampleComponent } from './example/example.component';
import {FormsModule} from "@angular/forms";
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    ExampleComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
