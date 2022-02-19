import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsModule } from './shared/details/details.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [{ provide: 'BASE_URL', useFactory: () => environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
