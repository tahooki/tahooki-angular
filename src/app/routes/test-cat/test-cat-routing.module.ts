import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestCatComponent } from './test-cat.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'test/cat',
        component: TestCatComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TestCatRoutingModule {
}
