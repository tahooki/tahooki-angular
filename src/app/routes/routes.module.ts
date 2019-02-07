import { NgModule } from '@angular/core';
import { TestCatModule } from './test-cat/test-cat.module';
import { TestDogModule } from './test-dog/test-dog.module';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    MainModule,
    TestDogModule,
    TestCatModule
  ]
})
export class RoutesModule { }
