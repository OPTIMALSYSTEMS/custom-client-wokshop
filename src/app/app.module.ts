import { YuvFrameworkModule } from '@yuuvis/framework';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    YuvFrameworkModule.forRoot({translations: ['assets/default/i18n/', 'assets/@yuuvis/i18n/']})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
