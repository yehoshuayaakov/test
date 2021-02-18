import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FramesComponent } from './components/frames/frames.component';
import { LensePageComponent } from './components/lense-page/lense-page.component';
import { ChooseLensesComponent } from './components/choose-lenses/choose-lenses.component';
import { FormComponent } from './components/form/form.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FramesComponent,
    LensePageComponent,
    ChooseLensesComponent,
    FormComponent,
    FinalOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
