import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ReporterComponent } from './components/reporter/reporter.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import { ParkService } from './services/park.service';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './services/food.service';
import { SpeciesService } from './services/species.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealsService } from './services/meals.service';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ReporterComponent,
    MealFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    ParkService,
    FoodService,
    SpeciesService,
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
