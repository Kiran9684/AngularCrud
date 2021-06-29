import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './Shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './Shared/confirm-equal-validator.directive';
import { CreateEmployeeCanDeactivateGuard } from './routeGuards/create-employee-can-deactivate.guard';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    SelectRequiredValidatorDirective,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [CreateEmployeeCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
