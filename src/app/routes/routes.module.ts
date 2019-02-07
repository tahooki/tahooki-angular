import { NgModule } from '@angular/core';
import { TestDogModule } from 'src/app/routes/test-dog/test-dog.module';
import { TestCatModule } from 'src/app/routes/test-cat/test-cat.module';
import { MainModule } from 'src/app/routes/main/main.module';
import { TestSsrModule } from 'src/app/routes/test-ssr/test-ssr.module';

@NgModule({
  imports: [
    MainModule,
    TestDogModule,
    TestCatModule,
    TestSsrModule
  ]
})
export class RoutesModule { }
