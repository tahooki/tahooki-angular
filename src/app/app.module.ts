import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    CommonModule,
    NgtUniversalModule,

    TransferHttpCacheModule,
    HttpClientModule,

    RoutesModule,
    AppRoutingModule
  ],
  providers:    [],
})
export class AppModule {
}
