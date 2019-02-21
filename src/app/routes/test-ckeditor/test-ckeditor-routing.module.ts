import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestCkeditorComponent } from 'src/app/routes/test-ckeditor/test-ckeditor.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'test/ckeditor',
        component: TestCkeditorComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TestCkeditorRoutingModule {
}
