import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestSsrComponent } from './test-ssr.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'test/ssr',
        component: TestSsrComponent
      },
      {
        path:      'test/ssr/:id',
        component: TestSsrComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TestSsrRoutingModule {
}
