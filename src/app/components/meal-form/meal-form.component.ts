import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkService } from 'src/app/services/park.service';
import { Subscription, of, combineLatest } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { FoodService } from 'src/app/services/food.service';
import { SpeciesService } from 'src/app/services/species.service';
import { FormControl } from '@angular/forms';
import { SavePayload } from 'src/app/models/common.model';
import * as moment from 'moment'; 
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit, OnDestroy {
  public formData;
  public saveStatus =  {success: false, error: false, errorMsg: ""};
  private subscriptions: Subscription = new Subscription();
  
  public constructor(
    private parkService: ParkService,
    private foodService: FoodService,
    private speciesService: SpeciesService,
    private mealService: MealsService
  ) { }

  public ngOnInit(): void {
    
    this.formData = combineLatest(this.parkService.getParks(),
                          this.foodService.getFoods(),
                          this.speciesService.getSpecies()).pipe(
                              map(([parks, foods, species]) => {
                                console.log(parks, foods, species);
                                return { parks, foods, species };
                            })
                          )
  }

  public saveMeal(mealForm: any): void {
    this.saveStatus = {success : false, error: false, errorMsg: ""};
    const newMealData: SavePayload = mealForm.value;
    newMealData.time = moment(newMealData.time, 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DD HH:mm:ss');

    if (newMealData.time === "Invalid date") {
      newMealData.time = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    this.mealService.saveMealPayload(newMealData).subscribe((response) => {
      this.saveStatus.success = true;
      mealForm.resetForm();
    }, 
    (error) => {
      this.saveStatus.error = true 
      this.saveStatus.errorMsg = error;
    })
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
