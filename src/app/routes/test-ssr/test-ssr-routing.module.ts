import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestDogComponent } from 'src/app/routes/test-dog/test-dog.component';
import { TestSsrComponent } from 'src/app/routes/test-ssr/test-ssr.component';

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
