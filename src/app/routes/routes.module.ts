import { NgModule } from '@angular/core';

import { MainModule } from './main/main.module';
import { TestCatModule } from './test-cat/test-cat.module';
import { TestDogModule } from './test-dog/test-dog.module';
import { TestSsrModule } from './test-ssr/test-ssr.module';
import { TestModule } from './test/test.module';
import { TestCkeditorModule } from 'src/app/routes/test-ckeditor/test-ckeditor.module';

@NgModule({
  imports: [
    MainModule,
    TestModule,
    TestDogModule,
    TestCatModule,
    TestSsrModule,
    TestCkeditorModule
  ]
})
export class RoutesModule { }
