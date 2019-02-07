import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDogComponent } from './test-dog.component';
import { TestDogRoutingModule } from './test-dog-routing.module';

@NgModule({
  declarations: [TestDogComponent],
  imports:      [
    CommonModule,
    TestDogRoutingModule
  ]
})
export class TestDogModule {
}
