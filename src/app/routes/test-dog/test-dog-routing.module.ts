import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestDogComponent } from 'src/app/routes/test-dog/test-dog.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'test/dog',
        component: TestDogComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TestDogRoutingModule {
}
