import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCkeditorComponent } from 'src/app/routes/test-ckeditor/test-ckeditor.component';
import { TestCkeditorRoutingModule } from 'src/app/routes/test-ckeditor/test-ckeditor-routing.module';

@NgModule({
  declarations: [TestCkeditorComponent],
  imports: [
    CommonModule,
    TestCkeditorRoutingModule
  ]
})
export class TestCkeditorModule { }
