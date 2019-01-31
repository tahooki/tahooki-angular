import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCatComponent } from './test-cat.component';
import { TestCatRoutingModule } from 'src/app/routes/test-cat/test-cat-routing.module';

@NgModule({
  declarations: [TestCatComponent],
  imports: [
    CommonModule,
    TestCatRoutingModule
  ]
})
export class TestCatModule { }
