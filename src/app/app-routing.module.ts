import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LondonzipComponent } from './londonzip/londonzip.component';

const routes: Routes = [
  { path: 'londonpostcode', component: LondonzipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
