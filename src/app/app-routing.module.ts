import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { LensePageComponent } from './components/lense-page/lense-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lenses', component: LensePageComponent},
  { path: 'form', component: FormComponent},
  { path: 'final-order', component: FinalOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
