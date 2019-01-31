import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from 'src/app/routes/main/main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports:      [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
