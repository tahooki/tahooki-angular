import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSsrComponent } from './test-ssr.component';
import { TestSsrRoutingModule } from './test-ssr-routing.module';

@NgModule({
  declarations: [TestSsrComponent],
  imports: [
    CommonModule,
    TestSsrRoutingModule
  ]
})
export class TestSsrModule { }
